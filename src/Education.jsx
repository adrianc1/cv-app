import { useState } from 'react';

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
	const [editingId, setEditingId] = useState(null);

	function deleteListItem(id, arr) {
		const filteredArray = arr.filter((el) => el.id !== id);
		setSchoolArray(filteredArray);
	}

	function startEditing(id) {
		setEditingId(id);
	}

	function stopEditing() {
		setEditingId(null);
	}

	return (
		<div className="w-full flex flex-col ">
			{/* List school/education experience with edit and delete buttons */}
			{schoolArray.map((s) => {
				return (
					<li key={s.id} className="list-none">
						{editingId === s.id ? (
							<div className="flex flex-col">
								<input
									type="text"
									value={s.school}
									placeholder="School Name"
									onChange={(e) => {
										setSchoolArray((prev) => {
											return prev.map((item) => {
												if (item.id === editingId) {
													return { ...item, school: e.target.value };
												} else {
													return item;
												}
											});
										});
									}}
								/>
								<input
									type="number"
									value={s.year}
									placeholder="Number of Years"
									onChange={handleYearsChange}
								/>
								<input
									type="text"
									value={s.cert}
									placeholder="Degree/Cert"
									onChange={handleDegreeChange}
								/>
								<button
									className="w-1/6 hover:bg-green-700 hover:text-white text-green-500 font-bold rounded border"
									onClick={(e) => {
										e.preventDefault();
										stopEditing();
									}}
								>
									{' '}
									Done
								</button>
							</div>
						) : (
							<div className="flex w-full gap-4">
								<p>
									{s.school}-{s.cert}-{s.year} years
								</p>
								<button
									className="w-1/6 hover:bg-blue-700 hover:text-white text-blue-500 font-bold rounded border"
									onClick={(e) => {
										e.preventDefault();
										startEditing(s.id);
									}}
								>
									{' '}
									Edit{' '}
								</button>
								<button
									className="w-1/6 hover:bg-red-700 hover:text-white text-red-500 font-bold rounded border"
									onClick={(e) => {
										e.preventDefault();
										deleteListItem(s.id, schoolArray);
									}}
								>
									{' '}
									Delete{' '}
								</button>
							</div>
						)}
					</li>
				);
			})}

			{/* Add new school to the array */}
			<div className="flex flex-col">
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
					className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
					onClick={handleAddSchool}
				>
					{' '}
					Add School
				</button>
			</div>
		</div>
	);
}
