export default function Paper({
	name,
	email,
	phone,
	education,
	jobs,
	editEducationItem,
}) {
	return (
		<div className="w-full border-2 border-black flex-2">
			<p>
				{name.firstName}, {name.lastName}
			</p>
			<p>{email}</p>
			<p>{phone}</p>
			<ul>
				{education.map((ed) => {
					return (
						<li key={ed.id} onClick={() => editEducationItem(ed.id)}>
							{ed.school} - {ed.cert} - {ed.year} years
						</li>
					);
				})}
			</ul>

			<ul>
				{jobs.map((job, index) => {
					return (
						<li key={index}>
							{' '}
							{job.company} {job.job} {job.year}{' '}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
