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

	const fields = [
		{
			key: 'school',
			name: schoolName,
			type: 'text',
			placeholder: 'School Name',
			onChange: handleSchoolNameChange,
		},
		{
			key: 'year',
			name: schoolYear,
			type: 'number',
			placeholder: 'Number of Years',
			onChange: handleYearsChange,
		},
		{
			key: 'cert',
			name: degree,
			type: 'text',
			placeholder: 'Degree/Cert',
			onChange: handleDegreeChange,
		},
	];

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
					<li key={s.id} className="list-none mt-2">
						{editingId === s.id ? (
							<div className="flex flex-col gap-2">
								{fields.map((field) => {
									return (
										<input
											key={field.key}
											type={field.type}
											value={s[field.key]}
											placeholder={field.placeholder}
											onChange={(e) => {
												setSchoolArray((prev) => {
													return prev.map((item) => {
														if (item.id === editingId) {
															return { ...item, [field.key]: e.target.value };
														} else {
															return item;
														}
													});
												});
											}}
										/>
									);
								})}

								<button
									className="w-[80px] h-[30px] hover:bg-green-700 hover:text-white text-green-500 font-bold rounded border"
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
							<div className="flex items-center justify-between w-full gap-4 border border-gray-500 p-2">
								<p className="flex-grow min-w-0 overflow-hidden break-words">
									{s.school} - {s.cert} - {s.year} years
								</p>

								<div className="flex gap-2 flex-shrink-0">
									<button
										className="w-[80px] h-[30px] hover:bg-blue-700 hover:text-white text-blue-500 font-bold rounded border"
										onClick={(e) => {
											e.preventDefault();
											startEditing(s.id);
										}}
									>
										Edit
									</button>

									<button
										className="w-[80px] h-[30px] hover:bg-red-700 hover:text-white text-red-500 font-bold rounded border"
										onClick={(e) => {
											e.preventDefault();
											deleteListItem(s.id, schoolArray);
										}}
									>
										Delete
									</button>
								</div>
							</div>
						)}
					</li>
				);
			})}

			{/* Add new school to the array */}
			<div className="flex flex-col gap-2 mt-2">
				{fields.map((field) => {
					return (
						<input
							key={field.key}
							type={field.type}
							value={field.name}
							placeholder={field.placeholder}
							onChange={field.onChange}
						/>
					);
				})}
				<button
					className="w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded-full mx-auto mt-2"
					onClick={handleAddSchool}
				>
					{' '}
					Add School
				</button>
			</div>
		</div>
	);
}
