import styled, { css } from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

import { IColorsEnum } from '@types_/core/assets/theme';

interface IContainerProps {
	background: IColorsEnum;
}

export const Container = styled(TouchableOpacity)<IContainerProps>`
	width: 100%;
	min-height: 56px;
	max-height: 56px;
	border-radius: 6px;

	align-items: center;
	justify-content: center;

	${({ theme, background }) => css`
		background-color: ${theme.colors[background]};
	`}
`;

export const Title = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.fontSize.md};
		font-family: ${theme.fontFamily.bold};
		color: ${theme.colors.white};
	`}
`;
