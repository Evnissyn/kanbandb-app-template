import React, { useState } from 'react';

const Field = ({ label, newValue }) => {

	const [displayValue, setValue] = useState(newValue);
	return (
		<p>
			<label>{ label }</label>
			<span>{ displayValue }</span>
			<a title={`edit${label}`}> &#9998;</a>
		</p>
	);
};

export default Field;
