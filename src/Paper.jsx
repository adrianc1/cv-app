export default function Paper({ name, email, phone, education, jobs }) {
	return (
		<div className="flex flex-col overflow-x-auto">
			<h2 className="text-4xl text-center my-4">Resume</h2>

			{/* This wrapper controls width and scale for both paper and button */}
			<div className="w-[816px] mx-auto transform scale-100 md:scale-90 sm:scale-75 xs:scale-[.65]">
				<div className="h-[1056px] border border-gray-200 mt-8 lg:mt-0 rounded shadow-2xl pl-4 pt-4">
					<div className="gen-info w-full text-center">
						<h2 className="text-4xl text-center">
							{name.firstName} {name.lastName}
						</h2>
						<div className="contact-info flex justify-center gap-4 border-b border-indigo-400 w-[80%] mx-auto pb-2">
							<p>{email}</p> <p>{phone}</p>
						</div>
					</div>

					<h3 className="text-2xl px-4 mt-4">Education</h3>
					<ul className="my-2">
						{education.map((ed) => (
							<li key={ed.id} className="my-4 px-4">
								<p>
									{ed.school} - {ed.cert}
								</p>
								<span className="text-xs">
									{ed.startDate.replace(/-/g, '/')} -{' '}
									{ed.endDate.replace(/-/g, '/')}
								</span>
							</li>
						))}
					</ul>

					<h3 className="text-2xl px-4 mt-4">Professional Experience</h3>
					<ul>
						{jobs.map((job, index) => (
							<li key={index} className="my-4 px-4">
								<h3 className="font-bold">{job.company}</h3>
								<h4 className="italic">{job.job}</h4>
								<span className="text-xs">
									{job.startDate.replace(/-/g, '/')} -{' '}
									{job.endDate.replace(/-/g, '/')}
								</span>
								<div className="mt-2">{job.description}</div>
							</li>
						))}
					</ul>
				</div>

				{/* Now inside the same scaled div, it will align perfectly */}
				<div className="flex justify-start md:justify-end my-4">
					<button className="bg-green-400 hover:bg-green-700 text-white rounded py-1 px-4 mb-4">
						Download Resume
					</button>
				</div>
			</div>
		</div>
	);
}
