export default function Paper({ name, email, phone, education, jobs }) {
	return (
		<div className="w-full md:w-1/2 h-auto border border-black mr-8 mt-8 rounded shadow-2xl">
			<div className="gen-info w-full text-center">
				<h2 className="text-4xl text-center">
					{name.firstName} {name.lastName}
				</h2>
				<div className="contact-info flex w-full justify-center gap-4">
					<p>{email}</p> <p>{phone}</p>
				</div>
			</div>
			<h3 className="text-2xl">Education</h3>
			<ul>
				{education.map((ed) => {
					return (
						<li key={ed.id}>
							{ed.school} - {ed.cert} - {ed.year} years
						</li>
					);
				})}
			</ul>
			<h3 className="text-2xl">Professional Experience</h3>
			<ul>
				{jobs.map((job, index) => {
					return (
						<li key={index}>
							{' '}
							{job.company} <br />
							{job.job} <br />
							{job.startDate.replace(/-/g, '/')}
							{' - '}
							{job.endDate.replace(/-/g, '/')}{' '}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
