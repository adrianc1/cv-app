import React, { useState } from 'react';

const Name = ({ name, handleFirstNameChange, handleLastNameChange }) => (
	<div className="mb-4">
		<label
			htmlFor="firstName"
			className="block text-sm font-medium text-gray-700"
		>
			First Name
		</label>
		<input
			type="text"
			id="firstName"
			value={name.firstName}
			onChange={handleFirstNameChange}
			className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
			placeholder="John"
		/>
		<label
			htmlFor="lastName"
			className="block text-sm font-medium text-gray-700 mt-2"
		>
			Last Name
		</label>
		<input
			type="text"
			id="lastName"
			value={name.lastName}
			onChange={handleLastNameChange}
			className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
			placeholder="Doe"
		/>
	</div>
);

// Email Component (placeholder)
const Email = ({ email, handleEmailChange }) => (
	<div className="mb-4">
		<label htmlFor="email" className="block text-sm font-medium text-gray-700">
			Email
		</label>
		<input
			type="email"
			id="email"
			value={email}
			onChange={handleEmailChange}
			className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
			placeholder="john.doe@example.com"
		/>
	</div>
);

// Phone Component (placeholder)
const Phone = ({ phone, handlePhoneChange }) => (
	<div className="mb-4">
		<label htmlFor="phone" className="block text-sm font-medium text-gray-700">
			Phone
		</label>
		<input
			type="tel"
			id="phone"
			value={phone}
			onChange={handlePhoneChange}
			className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
			placeholder="(123) 456-7890"
		/>
	</div>
);

// NEW: GeneralInformationForm Component
export default function GeneralInformationForm() {
	const [name, setName] = useState({ firstName: '', lastName: '' });
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	return (
		// Applied styling from the Professional component's "Add New Job" form wrapper
		<div className="flex flex-col gap-3 p-4 bg-gray-50 rounded-lg border shadow-md">
			<Name
				name={name}
				handleFirstNameChange={(e) =>
					setName({ ...name, firstName: e.target.value })
				}
				handleLastNameChange={(e) =>
					setName({ ...name, lastName: e.target.value })
				}
			/>
			<Email
				email={email}
				handleEmailChange={(e) => setEmail(e.target.value)}
			/>
			<Phone
				phone={phone}
				handlePhoneChange={(e) => setPhone(e.target.value)}
			/>
		</div>
	);
}
const Name = ({
	name = { firstName: '', lastName: '' },
	handleFirstNameChange,
	handleLastNameChange,
}) => (
	<div className="mb-4">
		<label
			htmlFor="firstName"
			className="block text-sm font-medium text-gray-700"
		>
			First Name
		</label>
		<input
			type="text"
			id="firstName"
			value={name.firstName}
			onChange={handleFirstNameChange}
			className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
			placeholder="John"
		/>
		<label
			htmlFor="lastName"
			className="block text-sm font-medium text-gray-700 mt-2"
		>
			Last Name
		</label>
		<input
			type="text"
			id="lastName"
			value={name.lastName}
			onChange={handleLastNameChange}
			className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
			placeholder="Doe"
		/>
	</div>
);

// Email Component (placeholder)
const Email = ({ email, handleEmailChange }) => (
	<div className="mb-4">
		<label htmlFor="email" className="block text-sm font-medium text-gray-700">
			Email
		</label>
		<input
			type="email"
			id="email"
			value={email}
			onChange={handleEmailChange}
			className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
			placeholder="john.doe@example.com"
		/>
	</div>
);

// Phone Component (placeholder)
const Phone = ({ phone, handlePhoneChange }) => (
	<div className="mb-4">
		<label htmlFor="phone" className="block text-sm font-medium text-gray-700">
			Phone
		</label>
		<input
			type="tel"
			id="phone"
			value={phone}
			onChange={handlePhoneChange}
			className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
			placeholder="(123) 456-7890"
		/>
	</div>
);

// NEW: GeneralInformationForm Component

export default function GeneralInformationForm({
	name,
	setName,
	email,
	setEmail,
	phone,
	setPhone,
}) {
	return (
		// Applied styling from the Professional component's "Add New Job" form wrapper
		<div className="flex flex-col gap-3 p-4 bg-gray-50 rounded-lg border shadow-md">
			<Name
				name={name}
				handleFirstNameChange={(e) =>
					setName({ ...name, firstName: e.target.value })
				}
				handleLastNameChange={(e) =>
					setName({ ...name, lastName: e.target.value })
				}
			/>
			<Email
				email={email}
				handleEmailChange={(e) => setEmail(e.target.value)}
			/>
			<Phone
				phone={phone}
				handlePhoneChange={(e) => setPhone(e.target.value)}
			/>
		</div>
	);
}