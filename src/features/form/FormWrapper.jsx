export default function FormWrapper({ children, showFields, setShowFields }) {
	return (
		<div className="flex flex-col flex-2 z-90">
			<div className="flex flex-col">
				<h1 className="text-3xl font-bold my-6 text-center text-primary text-indigo-700">
					Let's Create Your Resume
				</h1>
				<button
					onClick={(e) => {
						e.preventDefault();
						setShowFields((prev) => !prev);
					}}
					className="rounded-xl w-1/2 px-4 py-2  text-indigo-900 text-sm font-semibold hover:from-pink-600 hover:to-indigo-600 transition-all duration-300 shadow-md pointer z-101 self-end lg:hidden"
				>
					{showFields ? 'View Resume' : 'Edit Fields'}
				</button>
			</div>

			<div
				className={`min-h-screen w-full z-100 bg-gray-50 overflow-hidden ${
					!showFields ? 'hidden' : ''
				}  lg:flex lg:relative lg:flex-row`}
			>
				<form
					action=""
					className={`flex flex-col w-full h-full flex-1 justify-around items-center `}
				>
					<div className="title flex flex-col items-center justify-center">
						{/* <img src={resumeLogo} alt="" className="w-1/10 h-1/10" /> */}
					</div>
					{children}
				</form>
			</div>
		</div>
	);
}
