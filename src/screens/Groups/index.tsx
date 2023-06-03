import React from 'react';

import { Highlight, GroupCard } from '@components/index';

import * as Styles from './styles';

const Groups: React.FC = () => {
	return (
		<Styles.Container>
			<Highlight title='Turmas' subtitle='Jogue com a sua turma' />

			<GroupCard title='Primeiro' />
		</Styles.Container>
	);
};

export default Groups;
