import { AccessibilityProps } from 'react-native';

declare global {
	export interface IDefaultProps extends Partial<AccessibilityProps> {
		testID?: string;
	}

	export interface IDefaultPropsWithChildren extends IDefaultProps {
		children?: React.ReactNode;
	}

	export interface IComponent<T = {}> extends React.FC<IDefaultProps & T> {}

	export interface IComponentWithChildren<T = {}>
		extends React.FC<IDefaultPropsWithChildren & T> {}

	export interface IPlayersRouteParams {
		group: string;
	}

	namespace ReactNavigation {
		interface RootParamList {
			groups: undefined;
			newGroup: undefined;
			players: IPlayersRouteParams;
		}
	}
}
