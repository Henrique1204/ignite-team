import 'styled-components';

import { ITheme } from '../core/assets/theme/index';

declare module 'styled-components' {
	export interface DefaultTheme extends ITheme {}
}
