import styled from 'styled-components/native';

import { UsersThree } from 'phosphor-react-native';

import MainContainer from '@components/MainContainer';

export const Container = styled(MainContainer)`
	width: 100%;
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
