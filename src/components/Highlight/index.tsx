import React from 'react';

import * as Styles from './styles';

interface IHighlightProps {
	title: string;
	subtitle: string;
}

const Highlight: IComponent<IHighlightProps> = ({ title, subtitle }) => {
	return (
		<Styles.Container accessible>
			<Styles.Title>{title}</Styles.Title>

			<Styles.Subtitle>{subtitle}</Styles.Subtitle>
		</Styles.Container>
	);
};

export default Highlight;
