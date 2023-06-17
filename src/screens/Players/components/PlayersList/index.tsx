import React from 'react';

import { Alert, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { IPlayerStorage } from '@types_/core/storage/player';

import { playerRemove } from '@storage/player';

import AppError from '@utils/AppError';

import { ListEmpty, Loader, PlayerCard } from '@components/index';

export interface IPlayersListProps {
	team: string;
	players: IPlayerStorage[];
	loading: boolean;

	onRefresh: () => Promise<void>;
}

const PlayersList: IComponent<IPlayersListProps> = ({
	players,
	team,
	loading,
	onRefresh,
}) => {
	const route = useRoute();
	const { group } = route.params as IPlayersRouteParams;

	const handleOnRemovePlayer = (playerName: string) => {
		const _onRemove = async () => {
			try {
				const player = { name: playerName, team };

				await playerRemove(player, group);
				await onRefresh();
			} catch (error) {
				if (error instanceof AppError) {
					return Alert.alert('Novo Jogador', error.message);
				}

				Alert.alert('Novo Jogador', 'Não foi possível remover jogador.');
				console.error(error);
			}
		};

		Alert.alert(
			'Remover Jogador',
			`Certeza que deseja remover o jogador ${playerName}?`,
			[{ text: 'Não' }, { text: 'Sim', onPress: _onRemove }]
		);
	};

	return (
		<FlatList
			data={players}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={[
				{ paddingBottom: 100 },
				players.length === 0 && { flex: 1 },
			]}
			keyExtractor={({ name, team }) => `${name}-${team}`}
			renderItem={({ item }) => (
				<Loader loading={loading}>
					<PlayerCard name={item.name} onRemove={handleOnRemovePlayer} />
				</Loader>
			)}
			ListEmptyComponent={() => (
				<ListEmpty message='Não há pessoas nesse time.' />
			)}
		/>
	);
};

export default PlayersList;
