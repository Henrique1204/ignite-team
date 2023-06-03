import React from 'react';
import { StatusBar } from 'react-native';
import { default as styled, ThemeProvider } from 'styled-components/native';

import { theme } from '@core/assets/theme';

import Groups from '@screens/Groups';

const SafeAreaView = styled.SafeAreaView`
	background-color: ${({ theme }) => theme.colors.gray_700};

	flex: 1;
`;

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<SafeAreaView>
				<StatusBar
					barStyle='light-content'
					backgroundColor='transparent'
					translucent
				/>

				<Groups />
			</SafeAreaView>
		</ThemeProvider>
	);
};

export default App;
