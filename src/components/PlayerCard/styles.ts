import styled, { css } from 'styled-components/native';

import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
	width: 100%;
	height: 56px;
	border-radius: 6px;
	margin-bottom: 16px;

	background-color: ${({ theme }) => theme.colors.gray_500};

	flex-direction: row;
	align-items: center;
`;

export const Name = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.fontSize.md};
		font-family: ${theme.fontFamily.regular};

		color: ${theme.colors.gray_200};
	`}

	flex: 1;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
	color: theme.colors.gray_200,
	size: 24,
}))`
	margin-left: 16px;
	margin-right: 4px;
`;
