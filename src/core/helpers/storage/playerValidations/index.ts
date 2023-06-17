import { PlayerStorage } from '@types_/core/storage/player';

import AppError from '@utils/AppError';

import { isEmptyString, isEqualText } from '../../index';

export const validatePlayerEmptyData = (playerData: PlayerStorage): void => {
	const validations: Record<keyof PlayerStorage, string> = {
		name: 'O nome do jogador deve ser preenchido.',
		time: 'O nome do time deve ser preenchido.',
	};

	const validationsArray = Object.entries(validations);

	for (let i = 0; i < validationsArray.length; i++) {
		const [key, message] = validationsArray[i] as [keyof PlayerStorage, string];

		if (isEmptyString(playerData[key])) throw new AppError(message);
	}
};

export const validatePlayerAlreadyExist = (
	players: PlayerStorage[],
	playerData: PlayerStorage
): void => {
	const playerAlreadyExist = players.some(
		({ name, time }) =>
			isEqualText(name, playerData.name) && isEqualText(time, playerData.time)
	);

	if (playerAlreadyExist) {
		throw new AppError('Já existe um jogador com esse nome nesse time.');
	}
};
