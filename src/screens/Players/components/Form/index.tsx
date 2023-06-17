import React from 'react';

import { Alert } from 'react-native';
import { TextInput as ITextInput } from 'react-native/types';
import { useRoute } from '@react-navigation/native';

import isEmptyString from '@helpers/isEmptyString';

import { playerAddByGroup } from '@storage/player';

import AppError from '@utils/AppError';

import { TextInput, ButtonIcon } from '@components/index';

import * as Styles from './styles';

export interface IFormProps {
	team: string;

	onRefresh: () => Promise<void>;
}

const Form: IComponent<IFormProps> = ({ onRefresh, team }) => {
	const [name, setName] = React.useState<string>('');

	const inputRef = React.useRef<ITextInput>(null);

	const route = useRoute();
	const { group } = route.params as IPlayersRouteParams;

	const handleOnAdd = async () => {
		try {
			const newPlayer = { name, team };

			await playerAddByGroup(newPlayer, group);

			await onRefresh();

			setName('');

			// Não funciona com a limpeza de texto.
			// inputRef.current?.blur();
			// Keyboard.dismiss();
		} catch (error) {
			if (error instanceof AppError) {
				return Alert.alert('Novo Jogador', error.message);
			}

			Alert.alert('Novo Jogador', 'Não foi possível adicionar novo jogador.');
			console.error(error);
		}
	};

	return (
		<Styles.Form>
			<TextInput
				ref={inputRef}
				placeholder='Nome do jogador'
				autoCorrect={false}
				value={name}
				defaultValue=''
				onChangeText={setName}
				onSubmitEditing={handleOnAdd}
				returnKeyType='done'
			/>

			<ButtonIcon
				icon='add'
				onPress={() => handleOnAdd()}
				disabled={isEmptyString(name)}
			/>
		</Styles.Form>
	);
};

export default Form;
