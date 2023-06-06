import styled, { css } from 'styled-components/native';

export const Container = styled.View`
	padding: 24px;
	margin-top: 16px;

	flex: 1;
	justify-content: flex-start;
`;

export const Form = styled.View`
	width: 100%;
	border-radius: 6px;

	background: ${({ theme }) => theme.colors.gray_700};

	flex-direction: row;
	justify-content: center;
	gap: 12px;
`;

export const HeaderList = styled.View`
	width: 100%;
	margin: 32px 0 12px;

	flex-direction: row;
	align-items: center;
`;

export const NumberOfPlayers = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.fontSize.sm};
		font-family: ${theme.fontFamily.bold};

		color: ${theme.colors.gray_200};
	`}
`;
