export default function Phone({ phone, handlePhoneChange }) {
	return (
		<>
			<input
				type="tel"
				placeholder="Phone Number"
				value={phone}
				onChange={handlePhoneChange}
			/>
		</>
	);
}
