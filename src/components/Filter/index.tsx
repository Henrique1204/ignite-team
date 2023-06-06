import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import * as Styles from './styles';

interface IFilterProps extends Styles.IContainerProps, TouchableOpacityProps {
	title: string;
}

const Filter: IComponent<IFilterProps> = ({ title, ...props }) => {
	return (
		<Styles.Container role='button' accessibilityRole='button' {...props}>
			<Styles.Title>{title}</Styles.Title>
		</Styles.Container>
	);
};

export default Filter;
