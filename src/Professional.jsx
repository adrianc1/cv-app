import { useState } from 'react';

export default function Professional({
	companyName,
	jobTitle,
	jobYears,
	jobArray,
	setJobArray,
	handleCompanyChange,
	handleJobTitleChange,
	handleJobYearsChange,
	handleAddJob,
}) {
	const [editingId, setEditingId] = useState(null);

	const fields = [
		{
			key: 'Company',
			name: companyName,
			type: 'text',
			placeholder: 'Company Name',
			onChange: handleCompanyChange,
		},
		{
			key: 'year',
			name: jobYears,
			type: 'number',
			placeholder: 'Number of Years',
			onChange: handleJobYearsChange,
		},
		{
			key: 'job title',
			name: jobTitle,
			type: 'text',
			placeholder: 'Job Title',
			onChange: handleJobTitleChange,
		},
	];

	function startEditing(id) {
		setEditingId(id);
	}

	function stopEditing(id) {
		setEditingId(null);
	}

	function deleteListItem(id, arr) {
		const filteredArray = arr.filter((el) => el.id !== id);
		setJobArray(filteredArray);
	}
	return (
		<div className="w-full flex flex-col">
			{/* Render list here */}
			{jobArray.map((j) => {
				return (
					<li key={j.id} className="list-none mt-2">
						{editingId === j.id ? null : (
							<div className="flex items-center justify-between w-full gap-4 border border-gray-500 p-2">
								<p className="flex-grow min-w-0 overflow-hidden break-words">
									{j.company} - {j.job} - {j.year} years
								</p>

								<div className="flex gap-2 flex-shrink-0">
									<button
										className="w-[80px] h-[30px] hover:bg-blue-700 hover:text-white text-blue-500 font-bold rounded border"
										onClick={(e) => {
											e.preventDefault();
											startEditing(j.id);
										}}
									>
										Edit
									</button>

									<button
										className="w-[80px] h-[30px] hover:bg-red-700 hover:text-white text-red-500 font-bold rounded border"
										onClick={(e) => {
											e.preventDefault();
											deleteListItem(j.id, jobArray);
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
			<div className="w-full flex flex-col gap-2">
				{fields.map((field) => {
					return (
						<input
							type={field.type}
							value={field.name}
							placeholder={field.placeholder}
							onChange={field.onChange}
						/>
					);
				})}
				<button
					className=" w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded-full text-center mx-auto"
					onClick={handleAddJob}
				>
					{' '}
					Add Job
				</button>
			</div>
		</div>
	);
}
