export default function Education({
	schoolArray,
	setSchoolArray,
	schoolName,
	schoolYear,
	degree,
	handleAddSchool,
	handleSchoolNameChange,
	handleDegreeChange,
	handleYearsChange,
}) {
	function editListItem(id) {
		console.log('hey i got click1!', id);
	}

	function deleteListItem(id, arr) {
		const filteredArray = arr.filter((el) => el.id !== id);
		setSchoolArray(filteredArray);
	}
	return (
		<div className="w-full flex flex-col ">
			{schoolArray.map((s) => {
				return (
					<li key={s.id} className="w-full  flex gap-4">
						{s.school}
						<div className="btn-container flex gap-4">
							<button
								className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded"
								onClick={(e) => {
									e.preventDefault();
									editListItem(s.id);
								}}
							>
								Edit
							</button>
							<button
								className="bg-transparent hover:bg-blue-500 text-red-700 font-semibold hover:text-white border border-red-500 hover:border-transparent rounded"
								onClick={(e) => {
									e.preventDefault();
									deleteListItem(s.id, schoolArray);
								}}
							>
								Delete
							</button>
						</div>
					</li>
				);
			})}

			<input
				type="text"
				value={schoolName}
				placeholder="School Name"
				onChange={handleSchoolNameChange}
			/>
			<input
				type="number"
				value={schoolYear}
				placeholder="Number of Years"
				onChange={handleYearsChange}
			/>
			<input
				type="text"
				value={degree}
				placeholder="Degree/Cert"
				onChange={handleDegreeChange}
			/>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
				onClick={handleAddSchool}
			>
				{' '}
				Add School
			</button>
		</div>
	);
}
