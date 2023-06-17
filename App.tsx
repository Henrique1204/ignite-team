import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import {
	useFonts,
	Roboto_400Regular,
	Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { ITheme } from '@types_/core/assets/theme';

import { theme } from '@assets/theme/index';

import Routes from './src/routes';

import { Loader } from '@components/index';

const App: React.FC = () => {
	const [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_700Bold,
	});

	return (
		<ThemeProvider theme={theme}>
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
				<Routes />
			</Loader>
		</ThemeProvider>
	);
};

export default App;
