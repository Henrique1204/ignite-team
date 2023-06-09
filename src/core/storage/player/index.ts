import AsyncStorage from '@react-native-async-storage/async-storage';

import { IPlayerStorage } from '@types_/core/storage/player';

import * as Validations from '@helpers/storage/playerValidations';

import { PLAYER_COLLECTION } from '../storeageConfig';

export const playersSelectAllByGroup = async (
	group: string
): Promise<IPlayerStorage[]> => {
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
	newPlayer: IPlayerStorage,
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

export const playerRemove = async (
	player: IPlayerStorage,
	group: string
): Promise<void> => {
	try {
		Validations.validatePlayerEmptyData(player);

		const players = await playersSelectAllByGroup(group);

		const playersFiltered = players.filter(
			({ name, team }) => name != player.name || team !== player.team
		);

		const storageKey = `${PLAYER_COLLECTION}-${group}`;
		const storageData = JSON.stringify(playersFiltered);

		await AsyncStorage.setItem(storageKey, storageData);
	} catch (error) {
		throw error;
	}
};
