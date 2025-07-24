const Name = ({
	name = { firstName: '', lastName: '' },
	handleFirstNameChange,
	handleLastNameChange,
	isDisabled,
}) => (
	<div className="mb-4">
		<label
			htmlFor="firstName"
			className="block text-sm font-medium text-gray-700"
		>
			First Name
		</label>
		<input
			disabled={isDisabled}
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
			disabled={isDisabled}
			type="text"
			id="lastName"
			value={name.lastName}
			onChange={handleLastNameChange}
			className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
			placeholder="Doe"
		/>
	</div>
);

export default Name;
