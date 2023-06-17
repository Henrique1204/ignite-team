import React from 'react';
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { isEmptyString } from '@helpers/index';

import { groupAdd } from '@storage/group';

import AppError from '@utils/AppError';

import { Button, Highlight, TextInput } from '@components/index';

import * as Styles from './styles';

const NewGroup: React.FC = () => {
	const [group, setGroup] = React.useState<string>('');

	const { navigate } = useNavigation();

	const handleNew = async () => {
		try {
			await groupAdd(group);

			navigate('players', { group });
		} catch (error) {
			if (error instanceof AppError) {
				return Alert.alert('Novo Grupo', error.message);
			}

			Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.');
			console.error(error);
		}
	};

	return (
		<Styles.Container>
			<Styles.Icon />

			<Highlight
				title='Nova turma'
				subtitle='crie a turma para adicionar as pessoas.'
			/>

			<TextInput
				placeholder='Nome da turma'
				defaultValue=''
				value={group}
				onChangeText={setGroup}
			/>

			<Button
				title='Criar'
				style={{ marginTop: 20 }}
				onPress={handleNew}
				disabled={isEmptyString(group)}
			/>
		</Styles.Container>
	);
};

export default NewGroup;
