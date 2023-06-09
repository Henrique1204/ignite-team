import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as Styles from './styles';

type buttonStylePropEnum = 'primary' | 'secondary';

interface IButtonProps extends TouchableOpacityProps {
	title: string;
	type?: buttonStylePropEnum;
}

const Button: IComponent<IButtonProps> = ({
	title,
	type = 'primary',
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
			background={type === 'primary' ? 'green_700' : 'red_dark'}
			{...props}
		>
			<Styles.Title>{title}</Styles.Title>
		</Styles.Container>
	);
};

export default Button;
