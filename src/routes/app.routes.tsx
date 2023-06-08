import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Groups, NewGroup, Players } from '@screens/index';

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
	return (
		<Navigator initialRouteName='groups' screenOptions={{ headerShown: false }}>
			<Screen name='groups' component={Groups} />
			<Screen name='newGroup' component={NewGroup} />
			<Screen name='players' component={Players} />
		</Navigator>
	);
};

export default AppRoutes;
