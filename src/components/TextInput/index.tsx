import React from 'react';

import { TextInputProps } from 'react-native';
import { TextInput as ITextInput } from 'react-native/types';

import * as Styles from './styles';

interface ITextInputProps extends IDefaultProps, TextInputProps {
	placeholderTextColor?: string;
}

const TextInput = React.forwardRef<ITextInput, ITextInputProps>(
	(props, ref) => {
		return <Styles.Container ref={ref} {...props} />;
	}
);

export default TextInput;
