import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import * as Styles from './styles';

type buttonStylePropEnum = 'primary' | 'secondary';

interface IButtonProps extends TouchableOpacityProps {
	icon: keyof typeof MaterialIcons.glyphMap;
	type?: buttonStylePropEnum;
}

const ButtonIcon: IComponent<IButtonProps> = ({
	type = 'primary',
	icon,
	...props
}) => {
	return (
		<Styles.Container
			accessible
			accessibilityRole='button'
			role='button'
			accessibilityState={{
				disabled: props?.disabled,
			}}
			{...props}
		>
			<Styles.Icon
				name={icon}
				customColor={type === 'primary' ? 'green_700' : 'red_dark'}
			/>
		</Styles.Container>
	);
};

export default ButtonIcon;
