import React from 'react';

import LogoFile from '@images/logo.png';

import * as Styles from './styles';

interface IHeaderProps extends Styles.IContainerProps {}

const Header: IComponent<IHeaderProps> = ({ showBackArrow, ...props }) => {
	return (
		<Styles.Container showBackArrow={showBackArrow} {...props}>
			{showBackArrow && (
				<Styles.BackArrowButton
					accessible
					role='button'
					accessibilityRole='button'
					accessibilityHint='Irá voltar para tela anterior.'
					accessibilityLabel='Botão de voltar a tela.'
				>
					<Styles.BackArrow />
				</Styles.BackArrowButton>
			)}

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
