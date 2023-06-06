import React from 'react';

import { FlatList } from 'react-native';

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
	const [team, setTeam] = React.useState<string>('Time a');
	const [players, setPlayers] = React.useState<string[]>([
		'Paulo',
		'Henrique',
		'Silva',
		'Souza',
	]);

	const handleOnRemove = (player: string) => {
		setPlayers((prev) => prev.filter((item) => item !== player));
	};

	return (
		<Styles.Container>
			<Highlight
				title='Nome da turma'
				subtitle='adicione a galera e separe os times.'
			/>

			<Styles.Form>
				<TextInput placeholder='Nome da pessoa' autoCorrect={false} />

				<ButtonIcon icon='add' />
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
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<PlayerCard name={item} onRemove={handleOnRemove} />
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
