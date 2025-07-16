import React from 'react';

export default function Phone({ phone, handlePhoneChange }) {
	return (
		<div className="flex flex-col">
			{' '}
			{/* Added a div for consistent spacing if needed */}
			<input
				type="tel"
				placeholder="Phone Number"
				value={phone}
				onChange={handlePhoneChange}
				className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
			/>
		</div>
	);
}
