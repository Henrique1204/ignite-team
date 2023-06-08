import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Highlight, GroupCard, ListEmpty, Button } from '@components/index';

import * as Styles from './styles';

const Groups: React.FC = () => {
	const [groups, setGroups] = React.useState<string[]>([]);

	const { navigate } = useNavigation();

	const handleNewGroup = () => navigate('newGroup');

	return (
		<Styles.Container>
			<Highlight title='Turmas' subtitle='Jogue com a sua turma' />

			<FlatList
				data={groups}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={!groups.length && { flex: 1 }}
				keyExtractor={(key) => key}
				renderItem={({ item }) => <GroupCard title={item} />}
				ListEmptyComponent={() => (
					<ListEmpty message='Que tal cadastrar a primeira turma?' />
				)}
			/>

			<Button title='Criar nova turma' onPress={handleNewGroup} />
		</Styles.Container>
	);
};

export default Groups;
