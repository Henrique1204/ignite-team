import React from 'react';
import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';

import {
	useFonts,
	Roboto_400Regular,
	Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { theme } from '@core/assets/theme';

import Groups from '@screens/Groups';

import { Loader, Header } from '@components/index';

const SafeAreaView = styled.SafeAreaView`
	background-color: ${({ theme }) => theme.colors.gray_600};

	flex: 1;
`;

const App: React.FC = () => {
	const [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_700Bold,
	});

	return (
		<ThemeProvider theme={theme}>
			<SafeAreaView>
				<StatusBar
					barStyle='light-content'
					backgroundColor='transparent'
					translucent
				/>

				<Loader
					loading={!fontsLoaded}
					accessibilityLabel='Animação de carregamento do projeto.'
					aria-hidden={fontsLoaded}
				>
					<Header />

					<Groups />
				</Loader>
			</SafeAreaView>
		</ThemeProvider>
	);
};

export default App;
