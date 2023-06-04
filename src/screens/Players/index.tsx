import React from 'react';

import { Highlight } from '@components/index';

import * as Styles from './styles';

const Players: React.FC = () => {
	return (
		<Styles.Container>
			<Styles.Icon />

			<Highlight
				title='Nome da turma'
				subtitle='adicione a galera e separe os times.'
			/>
		</Styles.Container>
	);
};

export default Players;
