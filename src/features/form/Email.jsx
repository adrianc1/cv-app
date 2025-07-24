import React from 'react';

export default function Email({ email, handleEmailChange, isDisabled }) {
	return (
		<div className="mb-4">
			<label
				htmlFor="email"
				className="block text-sm font-medium text-gray-700"
			>
				Email
			</label>
			<input
				disabled={isDisabled}
				type="email"
				id="email"
				value={email}
				onChange={handleEmailChange}
				className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
				placeholder="john.doe@example.com"
			/>
		</div>
	);
}
