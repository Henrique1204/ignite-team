import React from 'react';

import * as Styles from './styles';

interface ILoaderProps {
	loading: boolean;
}

const Loader: IComponent<ILoaderProps> = ({ children, loading }) => {
	if (!loading) return <>{children}</>;

	return (
		<Styles.Container>
			<Styles.Loading />
		</Styles.Container>
	);
};

export default Loader;
