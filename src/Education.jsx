import { useState } from 'react';

export default function Education({
	schoolArray,
	setSchoolArray,
	handleSchoolFormChange,
	handleAddSchool,
	schoolForm,
}) {
	const [editingId, setEditingId] = useState(null);

	const fields = [
		{ name: 'school', placeholder: 'School Name', type: 'text' },
		{ name: 'cert', placeholder: 'Degree/Cert', type: 'text' },
		{ name: 'startDate', placeholder: 'Start Date', type: 'date' },
		{ name: 'endDate', placeholder: 'End Date', type: 'date' },
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
											key={field.name}
											type={field.type}
											value={s[field.name]}
											placeholder={field.placeholder}
											onChange={(e) => {
												setSchoolArray((prev) => {
													return prev.map((item) => {
														if (item.id === editingId) {
															return { ...item, [field.name]: e.target.value };
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
									{s.school} {s.cert} {s.startDate} - {s.endDate}
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
			<div className="flex flex-col gap-5 mt-4">
				{fields.map((field) => (
					<input
						key={field.name}
						name={field.name}
						type={field.type}
						placeholder={field.placeholder}
						value={schoolForm[field.name]}
						onChange={handleSchoolFormChange}
					/>
				))}
				<button
					className="w-1/4 bg-indigo-600	 hover:bg-blue-700 text-white font-bold rounded mx-auto mt-2 py-1"
					onClick={handleAddSchool}
				>
					{' '}
					Add School
				</button>
			</div>
		</div>
	);
}
