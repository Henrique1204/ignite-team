import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Button, Highlight, MainContainer, TextInput } from '@components/index';

import * as Styles from './styles';

const NewGroup: React.FC = () => {
	const [group, setGroup] = React.useState<string>('');

	const { navigate } = useNavigation();

	const handleNew = () => navigate('players', { group });

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

			<Button title='Criar' style={{ marginTop: 20 }} onPress={handleNew} />
		</Styles.Container>
	);
};

export default NewGroup;
