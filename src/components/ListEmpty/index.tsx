import React from 'react';

import * as Styles from './styles';

interface IListEmptyProps {
	message: string;
}

const ListEmpty: IComponent<IListEmptyProps> = ({ message }) => {
	return (
		<Styles.Container accessible>
			<Styles.Message>{message}</Styles.Message>
		</Styles.Container>
	);
};

export default ListEmpty;
