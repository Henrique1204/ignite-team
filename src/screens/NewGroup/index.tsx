import React from 'react';

import { Button, Highlight, TextInput } from '@components/index';

import * as Styles from './styles';

const NewGroup: React.FC = () => {
	return (
		<Styles.Container>
			<Styles.Icon />

			<Highlight
				title='Nova turma'
				subtitle='crie a turma para adicionar as pessoas.'
			/>

			<TextInput />

			<Button title='Criar' style={{ marginTop: 20 }} />
		</Styles.Container>
	);
};

export default NewGroup;
