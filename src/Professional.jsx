import { useState } from 'react';

export default function Professional() {
	const [jobArray, setJobArray] = useState([]);
	const [jobName, setJobName] = useState('');
	const [jobTitle, setJobTitle] = useState('');

	return (
		<div className="w-full">
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
