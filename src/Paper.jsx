export default function Paper({ name, email, phone, education }) {
	return (
		<div className="w-full border-2 border-black flex-2">
			<p>
				{name.firstName}, {name.lastName}
			</p>
			<p>{email}</p>
			<p>{phone}</p>
			<p>
				{education.map((ed, index) => {
					return (
						<p key={index}>
							{ed.school} - {ed.cert} - {ed.year} years
						</p>
					);
				})}
			</p>
		</div>
	);
}
