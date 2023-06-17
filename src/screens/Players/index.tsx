import React from 'react';

import { Alert, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { IPlayerStorage } from '@types_/core/storage/player';

import { groupRemove } from '@storage/group';
import { playersSelectAllByGroup } from '@storage/player';

import { Button, Filter, Highlight } from '@components/index';

import * as Styles from './styles';

import Form from './components/Form';
import PlayersList from './components/PlayersList';

const Players: React.FC = () => {
	const [loading, setLoading] = React.useState<boolean>(true);
	const [players, setPlayers] = React.useState<IPlayerStorage[]>([]);
	const [team, setTeam] = React.useState<string>('Time a');

	const route = useRoute();
	const { group } = route.params as IPlayersRouteParams;

	const { navigate } = useNavigation();

	const fetchPlayers = async () => {
		try {
			setLoading(true);

			const players = await playersSelectAllByGroup(group);

			const playersByTeam = players.filter((player) => player.team === team);

			setPlayers(playersByTeam);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const handleOnRemoveGroup = () => {
		const _onRemove = async () => {
			try {
				await groupRemove(group);

				navigate('groups');
			} catch (error) {
				console.error(error);
			}
		};

		Alert.alert(
			'Remover Grupo',
			`Certeza que deseja remover o grupo ${group}?`,
			[{ text: 'Não' }, { text: 'Sim', onPress: _onRemove }]
		);
	};

	React.useEffect(() => {
		fetchPlayers();
	}, [team]);

	return (
		<Styles.Container>
			<Highlight
				title={group}
				subtitle='adicione a galera e separe os times.'
			/>

			<Form team={team} onRefresh={fetchPlayers} />

			<Styles.HeaderList>
				<FlatList
					horizontal
					data={['Time a', 'Time b']}
					keyExtractor={(item) => item}
					renderItem={({ item }) => (
						<Filter
							title={item}
							isActive={item === team}
							onPress={() => setTeam(item)}
						/>
					)}
				/>

				<Styles.NumberOfPlayers>{players.length}</Styles.NumberOfPlayers>
			</Styles.HeaderList>

			<PlayersList
				loading={loading}
				players={players}
				team={team}
				onRefresh={fetchPlayers}
			/>

			<Button
				title='Remover Turma'
				type='secondary'
				onPress={() => handleOnRemoveGroup()}
			/>
		</Styles.Container>
	);
};

export default Players;
