import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';
import { UsersThree } from 'phosphor-react-native';

export const Container = styled(TouchableOpacity)`
	width: 100%;
	height: 90px;
	padding: 24px;
	border-radius: 6px;
	margin-bottom: 12px;

	background-color: ${({ theme }) => theme.colors.gray_500};

	flex-direction: row;
	align-items: center;
	gap: 20px;
`;

export const Title = styled.Text`
	font-size: ${({ theme }) => theme.fontSize.md};
	font-family: ${({ theme }) => theme.fontFamily.regular};
	color: ${({ theme }) => theme.colors.gray_200};
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
	color: theme.colors.green_700,
	size: 32,
	weight: 'fill',
}))``;
