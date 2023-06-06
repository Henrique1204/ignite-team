import styled from 'styled-components/native';

import { CaretLeft } from 'phosphor-react-native';

export interface IContainerProps {
	showBackArrow?: boolean;
}

export const Container = styled.View<IContainerProps>`
	width: 100%;
	padding: 12px 24px;

	flex-direction: row;
	align-items: center;

	justify-content: ${({ showBackArrow }) =>
		showBackArrow ? 'space-between' : 'center'};
`;

export const Logo = styled.Image`
	width: 46px;
	height: 55px;
`;

export const BackArrowButton = styled.TouchableOpacity`
	width: 60px;
	padding: 4px 2px;

	justify-content: flex-start;
`;

export const BackArrow = styled(CaretLeft).attrs(({ theme }) => ({
	color: theme.colors.white,
	size: 32,
}))``;
