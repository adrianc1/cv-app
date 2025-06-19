export default function Paper({ name, email, phone, education, jobs }) {
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

			{jobs.map((job, index) => {
				return (
					<p key={index}>
						{' '}
						{job.company} {job.job} {job.year}{' '}
					</p>
				);
			})}
		</div>
	);
}
