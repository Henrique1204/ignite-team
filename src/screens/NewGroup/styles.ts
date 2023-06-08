import styled from 'styled-components/native';

import { UsersThree } from 'phosphor-react-native';

export const Container = styled.View`
	width: 100%;
	padding: 24px;
	margin-top: 16px;

	flex: 1;
	justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
	color: theme.colors.green_700,
	size: 56,
}))`
	align-self: center;
`;
