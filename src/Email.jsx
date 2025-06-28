export default function Email({ email, handleEmailChange }) {
	return (
		<>
			<input
				type="text"
				placeholder="Email"
				value={email}
				onChange={handleEmailChange}
			/>
		</>
	);
}
