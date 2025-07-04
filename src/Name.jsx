import React from 'react';

export default function Name({
	name,
	handleFirstNameChange,
	handleLastNameChange,
}) {
	return (
		<div className="flex flex-col gap-3">
			{' '}
			{/* Added a div to group inputs and apply gap */}
			<input
				placeholder="First Name"
				value={name.firstName}
				onChange={handleFirstNameChange}
				className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
			/>
			<input
				placeholder="Last Name"
				value={name.lastName}
				onChange={handleLastNameChange}
				className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
			/>
		</div>
	);
}
