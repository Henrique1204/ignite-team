import React from 'react';

import { FlatList } from 'react-native';

import { ButtonIcon, Filter, Highlight, TextInput } from '@components/index';

import * as Styles from './styles';

const Players: React.FC = () => {
	const [team, setTeam] = React.useState<string>('Time a');
	const [players, setPlayers] = React.useState<string[]>([]);

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
		</Styles.Container>
	);
};

export default Players;
