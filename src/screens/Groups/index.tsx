import { FlatList } from 'react-native';
import React from 'react';

import { Highlight, GroupCard, ListEmpty } from '@components/index';

import * as Styles from './styles';

const Groups: React.FC = () => {
	const [groups, setGroups] = React.useState<string[]>([]);

	return (
		<Styles.Container>
			<Highlight title='Turmas' subtitle='Jogue com a sua turma' />

			<FlatList
				data={groups}
				contentContainerStyle={!groups.length && { flex: 1 }}
				keyExtractor={(key) => key}
				renderItem={({ item }) => <GroupCard title={item} />}
				ListEmptyComponent={() => (
					<ListEmpty message='Que tal cadastrar a primeira turma?' />
				)}
			/>
		</Styles.Container>
	);
};

export default Groups;
