import styled, { css } from 'styled-components/native';

import { TextInput } from 'react-native';

export const Container = styled(TextInput).attrs(({ theme }) => ({
	placeholderTextColor: theme.colors.gray_400,
}))`
	min-height: 56px;
	max-height: 56px;
	padding: 16px;
	border-radius: 6px;

	flex: 1;

	${({ theme }) => css`
		font-size: ${theme.fontSize.md};
		font-family: ${theme.fontFamily.regular};

		color: ${theme.colors.white};
		background-color: ${theme.colors.gray_700};
	`}
`;
