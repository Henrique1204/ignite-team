import { FlatList } from 'react-native';
import React from 'react';

import { Highlight, GroupCard } from '@components/index';

import * as Styles from './styles';

const Groups: React.FC = () => {
	const [groups, setGroups] = React.useState<string[]>(['Galera da Rocket']);

	return (
		<Styles.Container>
			<Highlight title='Turmas' subtitle='Jogue com a sua turma' />

			<FlatList
				data={groups}
				keyExtractor={(key) => key}
				renderItem={({ item }) => <GroupCard title={item} />}
			/>
		</Styles.Container>
	);
};

export default Groups;
