export default function Education({
	schoolName,
	schoolYear,
	degree,
	handleAddSchool,
	handleSchoolNameChange,
	handleDegreeChange,
	handleYearsChange,
}) {
	return (
		<div className="w-full flex flex-col">
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
			<button className="bg-amber-700" onClick={handleAddSchool}>
				{' '}
				Add School
			</button>
		</div>
	);
}
