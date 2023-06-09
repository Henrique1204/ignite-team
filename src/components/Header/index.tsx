import React from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';

import LogoFile from '@images/logo.png';

import * as Styles from './styles';

interface IHeaderProps {}

const Header: IComponent<IHeaderProps> = ({ ...props }) => {
	const { name } = useRoute();
	const { navigate } = useNavigation();

	const showBackArrow = name !== 'groups';

	const handleGoBack = () => navigate('groups');

	return (
		<Styles.Container showBackArrow={showBackArrow} {...props}>
			{showBackArrow && (
				<Styles.BackArrowButton
					accessible
					role='button'
					accessibilityRole='button'
					accessibilityHint='Irá voltar para tela anterior.'
					accessibilityLabel='Botão de voltar a tela.'
					onPress={handleGoBack}
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
