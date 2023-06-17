import React from 'react';

import { Alert, FlatList } from 'react-native';
import { TextInput as ITextInput } from 'react-native/types';
import { useRoute } from '@react-navigation/native';

import { PlayerStorage } from '@types_/core/storage/player';

import { isEmptyString } from '@helpers/index';

import {
	playersSelectAllByGroup,
	playerAddByGroup,
	playerRemove,
} from '@storage/player';

import AppError from '@utils/AppError';

import {
	Button,
	ButtonIcon,
	Filter,
	Highlight,
	ListEmpty,
	PlayerCard,
	TextInput,
} from '@components/index';

import * as Styles from './styles';

const Players: React.FC = () => {
	const [players, setPlayers] = React.useState<PlayerStorage[]>([]);
	const [team, setTeam] = React.useState<string>('Time a');
	const [name, setName] = React.useState<string>('');

	const inputRef = React.useRef<ITextInput>(null);

	const route = useRoute();
	const { group } = route.params as IPlayersRouteParams;

	const fetchPlayers = async () => {
		try {
			const players = await playersSelectAllByGroup(group);

			const playersByTeam = players.filter((player) => player.team === team);

			setPlayers(playersByTeam);
		} catch (error) {
			console.log(error);
		}
	};

	const handleOnAdd = async () => {
		try {
			const newPlayer = { name, team };

			await playerAddByGroup(newPlayer, group);

			await fetchPlayers();

			setName('');

			// Não funciona com a limpeza de texto.
			// inputRef.current?.blur();
			// Keyboard.dismiss();
		} catch (error) {
			if (error instanceof AppError) {
				return Alert.alert('Novo Jogador', error.message);
			}

			Alert.alert('Novo Jogador', 'Não foi possível adicionar novo jogador.');
			console.error(error);
		}
	};

	const handleOnRemove = async (playerName: string) => {
		try {
			const player = { name: playerName, team };

			await playerRemove(player, group);
			await fetchPlayers();
		} catch (error) {
			if (error instanceof AppError) {
				return Alert.alert('Novo Jogador', error.message);
			}

			Alert.alert('Novo Jogador', 'Não foi possível remover jogador.');
			console.error(error);
		}
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

			<Styles.Form>
				<TextInput
					ref={inputRef}
					placeholder='Nome do jogador'
					autoCorrect={false}
					value={name}
					defaultValue=''
					onChangeText={setName}
					onSubmitEditing={handleOnAdd}
					returnKeyType='done'
				/>

				<ButtonIcon
					icon='add'
					onPress={() => handleOnAdd()}
					disabled={isEmptyString(name)}
				/>
			</Styles.Form>

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

			<FlatList
				data={players}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={[
					{ paddingBottom: 100 },
					players.length === 0 && { flex: 1 },
				]}
				keyExtractor={({ name, team }) => `${name}-${team}`}
				renderItem={({ item }) => (
					<PlayerCard name={item.name} onRemove={handleOnRemove} />
				)}
				ListEmptyComponent={() => (
					<ListEmpty message='Não há pessoas nesse time.' />
				)}
			/>

			<Button title='Remover Turma' type='secondary' />
		</Styles.Container>
	);
};

export default Players;
