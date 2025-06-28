export default function Paper({ name, email, phone, education, jobs }) {
	return (
		<div className="w-full md:w-1/3 md:mr-10 md:mt-2">
			<h2 className="text-4xl text-center my-4">Resume</h2>
			<div className="w-full h-3/4 border border-gray-200 mr-8 mt-8 rounded shadow-2xl pl-4 pt-4">
				<div className="gen-info w-full text-center">
					<h2 className="text-4xl text-center">
						{name.firstName} {name.lastName}
					</h2>
					<div className="contact-info flex justify-center gap-4 border-b-1 border-indigo-400 w-[90%] mx-auto pb-2">
						<p>{email}</p> <p>{phone}</p>
					</div>
				</div>
				<h3 className="text-2xl">Education</h3>
				<ul className="my-2">
					{education.map((ed) => {
						return (
							<li key={ed.id} className="my-4">
								<p className="">
									{ed.school} - {ed.cert}{' '}
								</p>
								<span className="text-xs">
									{ed.startDate.replace(/-/g, '/')} -{' '}
									{ed.endDate.replace(/-/g, '/')}
								</span>
								<br />
							</li>
						);
					})}
				</ul>
				<h3 className="text-2xl">Professional Experience</h3>
				<ul>
					{jobs.map((job, index) => {
						return (
							<li key={index} className="my-4">
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
		</div>
	);
}
