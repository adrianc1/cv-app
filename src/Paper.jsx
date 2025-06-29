export default function Paper({ name, email, phone, education, jobs }) {
	return (
		<div className="w-full lg:w-1/2 lg:mr-10 lg:mt-2">
			<h2 className="text-4xl text-center my-4">Resume</h2>
			<div className="w-full h-[900px] border border-gray-200 mr-8 mt-8 rounded shadow-2xl pl-4 pt-4 ">
				<div className="gen-info w-full text-center">
					<h2 className="text-4xl text-center">
						{name.firstName} {name.lastName}
					</h2>
					<div className="contact-info flex justify-center gap-4 border-b-1 border-indigo-400 w-[80%] mx-auto pb-2">
						<p>{email}</p> <p>{phone}</p>
					</div>
				</div>
				<h3 className="text-2xl px-4 mt-4">Education</h3>
				<ul className="my-2">
					{education.map((ed) => {
						return (
							<li key={ed.id} className="my-4 px-4">
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
				<h3 className="text-2xl px-4 mt-4">Professional Experience</h3>
				<ul>
					{jobs.map((job, index) => {
						return (
							<li key={index} className="my-4 px-4">
								{' '}
								<h3 className="font-bold">{job.company}</h3>
								<h4 className="italic">{job.job}</h4>
								<span className="text-xs">
									{job.startDate.replace(/-/g, '/')}
									{' - '}
									{job.endDate.replace(/-/g, '/')}
								</span>
								<br />
								<div className="mt-2">{job.description}</div>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="flex justify-end mt-4">
				<button className="bg-green-400 hover:bg-green-700 text-white rounded py-1 px-4 cursor">
					Download Resume
				</button>
			</div>
		</div>
	);
}
