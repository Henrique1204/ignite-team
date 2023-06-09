import AsyncStorage from '@react-native-async-storage/async-storage';

import { isEmptyString, isEqualText } from '@helpers/index';

import { GROUP_COLLECTION } from '../storeageConfig';

export const groupsSelectAll = async (): Promise<string[]> => {
	try {
		const groups = await AsyncStorage.getItem(GROUP_COLLECTION);

		if (!groups) return [];

		return JSON.parse(groups);
	} catch (error) {
		throw error;
	}
};

export const groupAdd = async (newGroup: string): Promise<void> => {
	try {
		if (isEmptyString(newGroup)) return;

		const groups = await groupsSelectAll();

		if (groups.some((group) => isEqualText(group, newGroup))) return;

		const newGroupsString = JSON.stringify([...groups, newGroup.trim()]);

		await AsyncStorage.setItem(GROUP_COLLECTION, newGroupsString);
	} catch (error) {
		throw error;
	}
};
