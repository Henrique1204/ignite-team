import AsyncStorage from '@react-native-async-storage/async-storage';

import { PlayerStorage } from '@types_/core/storage/player';

import * as Validations from '@helpers/storage/playerValidations';

import { PLAYER_COLLECTION } from '../storeageConfig';

export const playersSelectAllByGroup = async (
	group: string
): Promise<PlayerStorage[]> => {
	try {
		const storageKey = `${PLAYER_COLLECTION}-${group}`;

		const players = await AsyncStorage.getItem(storageKey);

		if (!players) return [];

		return JSON.parse(players);
	} catch (error) {
		throw error;
	}
};

export const playerAddByGroup = async (
	newPlayer: PlayerStorage,
	group: string
): Promise<void> => {
	try {
		Validations.validatePlayerEmptyData(newPlayer);

		const players = await playersSelectAllByGroup(group);

		Validations.validatePlayerAlreadyExist(players, newPlayer);

		const storageKey = `${PLAYER_COLLECTION}-${group}`;
		const storageData = JSON.stringify([...players, newPlayer]);

		await AsyncStorage.setItem(storageKey, storageData);
	} catch (error) {
		throw error;
	}
};
