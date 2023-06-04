import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

export type buttonStylePropEnum = 'primary' | 'secondary';

export interface IContainerProps {
	type?: buttonStylePropEnum;
}

export const Container = styled(TouchableOpacity)<IContainerProps>`
	width: 100%;
	min-height: 56px;
	max-height: 56px;
	border-radius: 6px;

	background-color: ${({ theme, type }) =>
		type === 'primary' ? theme.colors.green_700 : theme.colors.red_dark};

	align-items: center;
	justify-content: center;
`;

export const Title = styled.Text`
	font-size: ${({ theme }) => theme.fontSize.md};
	font-family: ${({ theme }) => theme.fontFamily.bold};
	color: ${({ theme }) => theme.colors.white};
`;
