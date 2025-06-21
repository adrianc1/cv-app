export default function Name({
	name,
	handleFirstNameChange,
	handleLastNameChange,
}) {
	return (
		<>
			<input
				placeholder="First Name"
				value={name.firstName}
				onChange={handleFirstNameChange}
			/>
			<input
				placeholder="Last Name"
				value={name.lastName}
				onChange={handleLastNameChange}
			/>
		</>
	);
}
