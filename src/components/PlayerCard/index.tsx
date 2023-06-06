import React from 'react';

import * as Styles from './styles';

import ButtonIcon from '../ButtonIcon';

interface IPlayerCardProps {
	name: string;
	onRemove: (player: string) => void;
}

const PlayerCard: IComponent<IPlayerCardProps> = ({
	name,
	onRemove,
	...props
}) => {
	return (
		<Styles.Container {...props}>
			<Styles.Icon name='person' />

			<Styles.Name>{name}</Styles.Name>

			<ButtonIcon
				icon='close'
				type='secondary'
				onPress={() => onRemove(name)}
			/>
		</Styles.Container>
	);
};

export default PlayerCard;
