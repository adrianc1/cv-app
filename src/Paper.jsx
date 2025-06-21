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
			<h2>
				{name.firstName} {name.lastName}
			</h2>
			<h3>Email</h3>
			<p>{email}</p>
			<h3>Phone Number</h3>
			<p>{phone}</p>
			<h3>Education</h3>
			<ul>
				{education.map((ed) => {
					return (
						<li key={ed.id} onClick={() => editEducationItem(ed.id)}>
							{ed.school} - {ed.cert} - {ed.year} years
						</li>
					);
				})}
			</ul>
			<h3>Professional Experience</h3>
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
