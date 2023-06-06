import styled, { css } from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

export interface IContainerProps {
	isActive?: boolean;
}

export const Container = styled(TouchableOpacity)<IContainerProps>`
	min-width: 70px;
	height: 38px;
	border-radius: 4px;
	margin-right: 12px;

	align-items: center;
	justify-content: center;

	${({ theme, isActive }) =>
		isActive &&
		css`
			border: 1px solid ${theme.colors.green_700};
		`}
`;

export const Title = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.fontSize.sm};
		font-family: ${theme.fontFamily.bold};
		text-transform: uppercase;

		color: ${theme.colors.white};
	`}
`;
