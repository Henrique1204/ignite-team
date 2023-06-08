import styled from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
	padding: 24px;

	background-color: ${({ theme }) => theme.colors.gray_600};

	flex: 1;
`;
