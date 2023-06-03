import React from 'react';

import * as Styles from './styles';

import LogoFile from '@images/logo.png';

const Header: IComponent = () => {
	return (
		<Styles.Container>
			<Styles.Logo
				role='img'
				accessibilityRole='image'
				accessibilityLabel='Escudo representando a união de um time.'
				alt='Escuode com três estrelas em cima e um foguete no centro.'
				source={LogoFile}
			/>
		</Styles.Container>
	);
};

export default Header;
