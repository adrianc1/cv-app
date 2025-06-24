export default function Paper({ name, email, phone, education, jobs }) {
	return (
		<div className="w-full md:w-1/2 h-auto border border-black mr-8 mt-8 rounded shadow-2xl pl-4 pt-4">
			<div className="gen-info w-full text-center">
				<h2 className="text-4xl text-center">
					{name.firstName} {name.lastName}
				</h2>
				<div className="contact-info flex w-full justify-center gap-4">
					<p>{email}</p> <p>{phone}</p>
				</div>
			</div>
			<h3 className="text-2xl">Education</h3>

			<ul className="my-2">
				{education.map((ed) => {
					return (
						<li key={ed.id} className="mt-2">
							<h4 className="">{ed.school} </h4>
							<span className="text-xs">
								{ed.startDate.replace(/-/g, '/')} -{' '}
								{ed.endDate.replace(/-/g, '/')}
							</span>
							<br />
							<span className="text-md">{ed.cert}</span>
						</li>
					);
				})}
			</ul>

			<h3 className="text-2xl">Professional Experience</h3>
			<ul>
				{jobs.map((job, index) => {
					return (
						<li key={index} className="">
							{' '}
							{job.company} <br />
							<h4 className="italic">{job.job}</h4>
							{job.startDate.replace(/-/g, '/')}
							{' - '}
							{job.endDate.replace(/-/g, '/')}
							<br />
							{job.description}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
