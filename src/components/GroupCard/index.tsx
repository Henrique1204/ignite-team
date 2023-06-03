import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as Styles from './styles';

interface IGroupCardProps extends TouchableOpacityProps {
	title: string;
}

const GroupCard: IComponent<IGroupCardProps> = ({ title, ...props }) => {
	return (
		<Styles.Container accessible {...props}>
			<Styles.Icon />
			<Styles.Title>{title}</Styles.Title>
		</Styles.Container>
	);
};

export default GroupCard;
