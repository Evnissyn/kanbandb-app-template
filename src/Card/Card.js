import React, { useState } from 'react';

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
			<p>{ title }</p>
			<p>{ status }</p>
			<p>{ details }</p>
			<form>
				<input type="text" placeholder={ title } name="inputTitle" />
				<input type="text" placeholder={ status } name="inputStatus" />
			</form>
		</div>
		);
}

export default Card;
