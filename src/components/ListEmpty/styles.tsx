import styled, { css } from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Message = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.fontSize.sm};
		font-family: ${theme.fontFamily.regular};
		text-align: center;

		color: ${theme.colors.gray_300};
	`}
`;
