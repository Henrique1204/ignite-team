import AsyncStorage from '@react-native-async-storage/async-storage';

import { isEmptyString, isEqualText } from '@helpers/index';

import AppError from '@utils/AppError';

import { GROUP_COLLECTION, PLAYER_COLLECTION } from '../storeageConfig';

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
		if (isEmptyString(newGroup)) {
			throw new AppError('O nome do grupo deve ser preenchido.');
		}

		const groups = await groupsSelectAll();

		if (groups.some((group) => isEqualText(group, newGroup))) {
			throw new AppError('Já existe um grupo com esse nome.');
		}

		const newGroupsString = JSON.stringify([...groups, newGroup.trim()]);

		await AsyncStorage.setItem(GROUP_COLLECTION, newGroupsString);
	} catch (error) {
		throw error;
	}
};

export const groupRemove = async (group: string): Promise<void> => {
	try {
		const groups = await groupsSelectAll();

		const groupsFiltered = groups.filter((prevGroup) => prevGroup !== group);

		const storageData = JSON.stringify(groupsFiltered);

		await AsyncStorage.setItem(GROUP_COLLECTION, storageData);

		const playerStorageKey = `${PLAYER_COLLECTION}-${group}`;

		await AsyncStorage.removeItem(playerStorageKey);
	} catch (error) {
		throw error;
	}
};
