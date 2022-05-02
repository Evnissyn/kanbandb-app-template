import React, { useState } from 'react';
import Column from '../Column';

const MainDisplay = () => {
	const [cardList, setCardList] = useState([]);

	return (
		<div>
			<Column />
			<Column />
		</div>
	);
}

export default MainDisplay;
