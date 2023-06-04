import React from 'react';

import { ButtonIcon, Highlight, TextInput } from '@components/index';

import * as Styles from './styles';

const Players: React.FC = () => {
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
		</Styles.Container>
	);
};

export default Players;
