import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as Styles from './styles';

interface IGroupCardProps extends Omit<TouchableOpacityProps, 'onPress'> {
	title: string;
	onPress: (title: string) => void;
}

const GroupCard: IComponent<IGroupCardProps> = ({
	title,
	onPress,
	...props
}) => {
	const handleOnPress = () => onPress(title);

	return (
		<Styles.Container accessible onPress={() => handleOnPress()} {...props}>
			<Styles.Icon />
			<Styles.Title>{title}</Styles.Title>
		</Styles.Container>
	);
};

export default GroupCard;
