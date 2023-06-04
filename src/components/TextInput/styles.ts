import styled from 'styled-components/native';

import { TextInput } from 'react-native';

export const Container = styled(TextInput).attrs(({ theme }) => ({
	placeholderTextColor: theme.colors.gray_400 as string,
}))`
	width: 100%;
	min-height: 56px;
	max-height: 56px;
	padding: 16px;
	border-radius: 6px;

	font-size: ${({ theme }) => theme.fontSize.md};
	font-family: ${({ theme }) => theme.fontFamily.regular};

	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.gray_700};
`;
