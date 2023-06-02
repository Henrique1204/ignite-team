import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Groups from '@screens/Groups';

const Styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

const App: React.FC = () => {
	return (
		<SafeAreaView style={Styles.container}>
			<StatusBar
				barStyle='light-content'
				backgroundColor='transparent'
				translucent
			/>

			<Groups />
		</SafeAreaView>
	);
};

export default App;
