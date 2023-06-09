import { GROUP_COLLECTION } from '@core/storage/storeageConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const groupsSelect = async () => {
	try {
		const groups = await AsyncStorage.getItem(GROUP_COLLECTION);

		if (!groups) return [];

		return JSON.parse(groups);
	} catch (error) {
		throw error;
	}
};
