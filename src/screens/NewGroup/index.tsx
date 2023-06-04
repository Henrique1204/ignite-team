import React from 'react';

import { Button, Highlight } from '@components/index';

import * as Styles from './styles';

const NewGroup: React.FC = () => {
	return (
		<Styles.Container>
			<Styles.Icon />

			<Highlight
				title='Nova turma'
				subtitle='crie a turma para adicionar as pessoas.'
			/>

			<Button title='Criar' />
		</Styles.Container>
	);
};

export default NewGroup;
