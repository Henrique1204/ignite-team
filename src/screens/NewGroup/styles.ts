import styled from 'styled-components/native';

import { UsersThree } from 'phosphor-react-native';

export const Container = styled.View`
	padding: 24px;

	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
	color: theme.colors.green_700,
	size: 56,
}))`
	align-self: center;
`;
