import { AccessibilityProps } from 'react-native';

declare global {
	export interface IDefaultProps extends Partial<AccessibilityProps> {
		testId?: string;
		children?: React.ReactNode;
	}

	export interface IComponent<T = {}> extends React.FC<IDefaultProps & T> {}
}
