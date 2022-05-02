import React, { useState } from 'react';
import Field from './Field';

const Card = ({ newTitle, newStatus, newDetails }) => {
	const [title, setTitle] = useState(newTitle);
	const [status, setStatus] = useState(newStatus);
	const [details, setDetails] = useState(newDetails);

	const onTitleChange = (changeTitle) => {
		setTitle(changeTitle);
	}

	const onStatusChange = (changeStatus) => {
		setStatus(changeStatus);
	}

	const onDetailChange = (changeDetail) => {
		setStatus(changeDetail);
	}

	const onEdit = (event) => {
		console.log()
	}

	return (
		<div>
			<Field label="Title" newValue={ newTitle } />			
			<Field label="Status" newValue={ newStatus } />
			<Field label="Details" newValue={ newDetails } />
			<form>
				<input type="text" placeholder={ title } name="inputTitle" />
				<input type="text" placeholder={ status } name="inputStatus" />
			</form>
		</div>
		);
}

export default Card;
