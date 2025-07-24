import React from 'react';

export default function Phone({ phone, handlePhoneChange, isDisabled }) {
	return (
		<div className="mb-4">
			<label
				htmlFor="phone"
				className="block text-sm font-medium text-gray-700"
			>
				Phone
			</label>
			<input
				disabled={isDisabled}
				type="tel"
				id="phone"
				value={phone}
				onChange={handlePhoneChange}
				className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-300 disabled:cursor-not-allowed"
				placeholder="(123) 456-7890"
			/>
		</div>
	);
}
