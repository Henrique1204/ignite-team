import React from 'react';

import Header from '@components/Header';

import * as Styles from './styles';

const MainContainer: IComponentWithChildren = ({ children }) => {
	return (
		<Styles.Container>
			<Header />

			{children}
		</Styles.Container>
	);
};

export default MainContainer;
