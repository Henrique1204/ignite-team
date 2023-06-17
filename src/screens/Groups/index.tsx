import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { groupsSelectAll } from '@storage/group';

import {
	Highlight,
	GroupCard,
	ListEmpty,
	Button,
	Loader,
} from '@components/index';

import * as Styles from './styles';

const Groups: React.FC = () => {
	const [loading, setLoading] = React.useState<boolean>(true);
	const [groups, setGroups] = React.useState<string[]>([]);

	const { navigate } = useNavigation();

	const fetchGroups = async () => {
		try {
			setLoading(true);

			const groups = await groupsSelectAll();

			setGroups(groups);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const handleNewGroup = () => navigate('newGroup');

	const handleSelectCard = (group: string) => navigate('players', { group });

	useFocusEffect(
		React.useCallback(() => {
			fetchGroups();
		}, [])
	);

	return (
		<Styles.Container>
			<Highlight title='Turmas' subtitle='Jogue com a sua turma' />

			<FlatList
				data={groups}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={!groups.length && { flex: 1 }}
				keyExtractor={(key) => key}
				renderItem={({ item }) => (
					<Loader loading={loading}>
						<GroupCard title={item} onPress={handleSelectCard} />
					</Loader>
				)}
				ListEmptyComponent={() => (
					<ListEmpty message='Que tal cadastrar a primeira turma?' />
				)}
			/>

			<Button title='Criar nova turma' onPress={handleNewGroup} />
		</Styles.Container>
	);
};

export default Groups;
