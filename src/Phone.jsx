export default function Phone({ phone, handlePhoneChange }) {
	return (
		<>
			<input
				type="tel"
				placeholder="phone number"
				value={phone}
				onChange={handlePhoneChange}
			/>
		</>
	);
}
