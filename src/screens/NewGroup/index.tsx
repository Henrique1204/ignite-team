import React from 'react';

import { Button, Highlight, MainContainer, TextInput } from '@components/index';

import * as Styles from './styles';

const NewGroup: React.FC = () => {
	return (
		<MainContainer>
			<Styles.Container>
				<Styles.Icon />

				<Highlight
					title='Nova turma'
					subtitle='crie a turma para adicionar as pessoas.'
				/>

				<TextInput placeholder='Nome da turma' />

				<Button title='Criar' style={{ marginTop: 20 }} />
			</Styles.Container>
		</MainContainer>
	);
};

export default NewGroup;
