import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { IColorsEnum } from '@types_/core/assets/theme';

export const Container = styled(TouchableOpacity)`
	width: 56px;
	height: 56px;
	maring-left: 12px;

	align-items: center;
	justify-content: center;
`;

export const Icon = styled(MaterialIcons).attrs(
	({ theme, customColor }: any) => ({
		color: theme.colors[customColor],
		size: 24,
	})
)``;
