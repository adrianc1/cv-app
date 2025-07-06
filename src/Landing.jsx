export default function Landing({ setShowLanding }) {
	// Lightning Fast Icon (similar to a bolt or speed)
	const LightningFastIcon = ({ className }) => (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);

	// Professional Icon (similar to a document or checkmark)
	const ProfessionalIcon = ({ className }) => (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14 2V8H20"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8 13H16"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8 17H16"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8 9H10"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);

	const FreeIcon = ({ className, size = 24 }) => (
		<svg
			className={className}
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			aria-label="Free"
		>
			{/* Gift box base */}
			<rect
				x="4"
				y="10"
				width="16"
				height="10"
				rx="1"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			{/* Gift box ribbon - vertical */}
			<line
				x1="12"
				y1="10"
				x2="12"
				y2="20"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>

			{/* Gift box ribbon - horizontal */}
			<line
				x1="4"
				y1="14"
				x2="20"
				y2="14"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>

			{/* Bow - left loop */}
			<path
				d="M8 10C8 8 10 6 12 8"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>

			{/* Bow - right loop */}
			<path
				d="M16 10C16 8 14 6 12 8"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>

			{/* Bow center knot */}
			<circle cx="12" cy="8" r="1" fill="currentColor" />

			{/* "FREE" text or star indicator */}
			<circle cx="17" cy="7" r="2" fill="currentColor" />

			{/* Star points inside the circle */}
			<path
				d="M17 6l.5 1h1l-.8.6.3 1-.5-.8-.5.8.3-1-.8-.6h1L17 6z"
				fill="white"
				stroke="none"
			/>
		</svg>
	);

	// User-Friendly Icon (similar to a happy face or person)
	const UserFriendlyIcon = ({ className }) => (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8 14C8 14 9 16 12 16C15 16 16 14 16 14"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9 9H9.01"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15 9H15.01"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);

	// Download & Go Icon (similar to a download arrow)
	const DownloadGoIcon = ({ className }) => (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 3V17"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17 12L12 17L7 12"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20 21H4"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);

	const NoSignUpIcon = ({ className, size = 24 }) => (
		<svg
			className={className}
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			aria-label="No sign up allowed"
		>
			{/* Background circle for better contrast */}
			<circle
				cx="12"
				cy="12"
				r="11"
				fill="none"
				stroke="currentColor"
				strokeWidth="1"
				opacity="0.2"
			/>

			{/* User icon - head */}
			<circle
				cx="12"
				cy="9"
				r="3"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			{/* User icon - body */}
			<path
				d="M6 20v-1a6 6 0 0 1 12 0v1"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			{/* Prohibition symbol - diagonal line */}
			<line
				x1="4.93"
				y1="4.93"
				x2="19.07"
				y2="19.07"
				stroke="currentColor"
				strokeWidth="2.5"
				strokeLinecap="round"
			/>

			{/* Main prohibition circle */}
			<circle
				cx="12"
				cy="12"
				r="10"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
	return (
		<main className="w-full">
			{/* Navigation Bar */}

			{/* Hero Section */}
			<section className="py-12 px-4 text-center">
				{' '}
				{/* Added py and px for spacing */}
				<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
					Craft Your Professional Resume in Minutes. <br />
					<span className="font-semibold inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
						Absolutely Free.
					</span>
				</h1>
				<h2 className="text-xl sm:text-2xl text-gray-700 mt-4 max-w-3xl mx-auto">
					Land Your Dream Job Faster and Smarter.
				</h2>
				<p className="text-base sm:text-lg text-gray-600 mt-6 mb-8 max-w-2xl mx-auto leading-relaxed">
					Tired of wrestling with complicated formatting and endless templates?
					Our intuitive online resume builder makes creating a stunning,
					recruiter-approved resume incredibly simple. Get noticed by hiring
					managers and beat the Applicant Tracking Systems (ATS) without
					spending a dime.
				</p>
				<button
					onClick={() => {
						setShowLanding(false);
						window.scrollTo({ top: 0, behavior: 'smooth' });
					}}
					className="rounded-xl px-8 py-4 bg-gradient-to-r from-pink-500 to-indigo-500 text-white text-lg font-bold hover:from-pink-600 hover:to-indigo-600 transition-all duration-300 shadow-lg transform hover:scale-105"
				>
					Create Your Free Resume Now
				</button>
			</section>

			<section className="w-full py-12 px-4 bg-gray-50">
				{' '}
				{/* Added padding and light background */}
				<h3 className="text-3xl font-bold text-center mb-10 text-gray-800">
					Why Choose Our Free Resume Builder?
				</h3>
				<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{/* Feature 1: Lightning Fast */}
					<li className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
						<span className="flex items-center justify-center w-16 h-16 text-indigo-600 mb-4 flex-shrink-0">
							<LightningFastIcon className="w-full h-full" />
						</span>
						<p className="text-lg text-gray-700">
							<span className="font-bold text-gray-900">Lightning Fast:</span>{' '}
							Build a complete, professional resume in just minutes – not hours.
						</p>
					</li>

					{/* Feature 2: 100% Free */}
					<li className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
						<span className="flex items-center justify-center w-16 h-16 text-orange-500 mb-4 flex-shrink-0">
							<FreeIcon className="w-full h-full" />
						</span>
						<p className="text-lg text-gray-700">
							<span className="font-bold text-gray-900">100% Free:</span> No
							hidden fees, no subscriptions. Create and download your resume
							without any cost.
						</p>
					</li>
					{/* Feature 3: No Sign-Up Required */}
					<li className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
						<span className="flex items-center justify-center w-16 h-16 text-red-600 mb-4 flex-shrink-0">
							<NoSignUpIcon className="w-full h-full" />
						</span>
						<p className="text-lg text-gray-700">
							<span className="font-bold text-gray-900">
								No Sign-Up Required:
							</span>{' '}
							Start building your resume instantly, no account creation needed.
						</p>
					</li>

					{/* Feature 4: Effortlessly Professional */}
					<li className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
						<span className="flex items-center justify-center w-16 h-16 text-green-600 mb-4 flex-shrink-0">
							<ProfessionalIcon className="w-full h-full" />
						</span>
						<p className="text-lg text-gray-700">
							<span className="font-bold text-gray-900">
								Effortlessly Professional:
							</span>{' '}
							Access a library of modern, ATS-friendly templates designed to get
							you noticed.
						</p>
					</li>

					{/* Feature 56: User-Friendly Interface */}
					<li className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
						<span className="flex items-center justify-center w-16 h-16 text-yellow-500 mb-4 flex-shrink-0">
							<UserFriendlyIcon className="w-full h-full" />
						</span>
						<p className="text-lg text-gray-700">
							<span className="font-bold text-gray-900">
								User-Friendly Interface:
							</span>{' '}
							Our step-by-step guidance makes the process smooth, even if you
							have no design experience.
						</p>
					</li>

					{/* Feature 5: Download & Go */}
					<li className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
						<span className="flex items-center justify-center w-16 h-16 text-blue-600 mb-4 flex-shrink-0">
							<DownloadGoIcon className="w-full h-full" />
						</span>
						<p className="text-lg text-gray-700">
							<span className="font-bold text-gray-900">Download & Go:</span>{' '}
							Instantly download your resume in PDF format, ready to send to
							potential employers.
						</p>
					</li>
				</ul>
			</section>
			<section className="w-full mx-auto text-center my-8">
				<button
					onClick={() => {
						setShowLanding(false);
						window.scrollTo({ top: 0, behavior: 'smooth' });
					}}
					className="rounded-xl px-8 py-4 bg-gradient-to-r from-pink-500 to-indigo-500 text-white text-lg font-bold hover:from-pink-600 hover:to-indigo-600 transition-all duration-300 shadow-lg transform hover:scale-105"
				>
					Build My Resume
				</button>
			</section>
		</main>
	);
}
