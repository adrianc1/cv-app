export default function Email({ email, handleEmailChange }) {
	return (
		<>
			<input
				type="text"
				placeholder="email"
				value={email}
				onChange={handleEmailChange}
			/>
		</>
	);
}
