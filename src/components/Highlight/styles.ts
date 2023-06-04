import styled, { css } from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	margin: 32px 0;
`;

export const Title = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.fontSize.xl};
		font-family: ${theme.fontFamily.bold};
		text-align: center;

		color: ${theme.colors.white};
	`}
`;

export const Subtitle = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.fontSize.md};
		font-family: ${theme.fontFamily.regular};
		text-align: center;

		color: ${theme.colors.gray_300};
	`}
`;
