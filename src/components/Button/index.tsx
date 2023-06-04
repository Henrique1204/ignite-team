import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as Styles from './styles';

interface IButtonProps extends TouchableOpacityProps, Styles.IContainerProps {
	title?: string;
}

const Button: IComponentWithChildren<IButtonProps> = ({
	children,
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
			type={type}
			{...props}
		>
			{title ? <Styles.Title>{title}</Styles.Title> : children}
		</Styles.Container>
	);
};

export default Button;
