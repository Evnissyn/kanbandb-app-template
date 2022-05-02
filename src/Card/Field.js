import React, { useState } from 'react';

const Field = ({ label, newValue }) => {

	const [displayValue, setValue] = useState(newValue);
	const [edit, changeEdit] = useState(false);

	const enableEdit = () => changeEdit(true);
	const disableEdit = () => changeEdit(false);
	const save = (event) => {
		event.preventDefault();
		setValue(event.target.elements[0].value);
		disableEdit();
	}

	if (edit) {
		return (
			<div>
				<form name={`form${label}`} onSubmit={ save }>
					<label>{ label }</label>
					<input name="userValue" placeholder={ displayValue } />
					<button type="submit" title={ `save${label}` }/>
					<span title={ `cancelEdit${label}` } onClick={ disableEdit }> &#10007;</span>
				</form>
			</div>
		);
	} else {
		return (
			<div>
				<label>{ label }</label>
				<span>{ displayValue }</span>
				<a title={`edit${label}`} onClick={ enableEdit }> &#9998;</a>
			</div>
		);
	};
};

export default Field;
