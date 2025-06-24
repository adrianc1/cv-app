import { useState } from 'react';

export default function Professional({
	jobArray,
	setJobArray,
	jobForm,
	handleAddJob,
	handleJobFormChange,
}) {
	const [editingId, setEditingId] = useState(null);

	const fields = [
		{ name: 'company', placeholder: 'Company Name', type: 'text' },
		{ name: 'job', placeholder: 'Job Title', type: 'text' },
		{ name: 'startDate', placeholder: 'Start Date', type: 'date' },
		{ name: 'endDate', placeholder: 'End Date', type: 'date' },
		{ name: 'description', placeholder: 'Description', type: 'text' },
	];

	function startEditing(id) {
		setEditingId(id);
	}

	function stopEditing() {
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
					<li key={j.id} className="list-none my-2">
						{editingId === j.id ? (
							<div className="flex flex-col gap-2">
								{fields.map((field) => {
									return (
										<input
											key={field.name}
											type={field.type}
											value={j[field.name]}
											placeholder={field.placeholder}
											onChange={(e) => {
												setJobArray((prev) => {
													return prev.map((item) => {
														if (item.id === editingId) {
															return {
																...item,
																[field.name]: e.target.value,
															};
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
									className="w-[80px] h-[30px] hover:bg-green-700 hover:text-white text-green-500 font-bold rounded border mb-4"
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
									{j.company} {j.job} {j.startDate.replace(/-/g, '/')} -{' '}
									{j.endDate.replace(/-/g, '/')}
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

			{/* Add New Job Inputs */}
			<div className="w-full flex flex-col gap-2">
				{fields.map((field) => (
					<input
						key={field.name}
						name={field.name}
						type={field.type}
						placeholder={field.placeholder}
						value={jobForm[field.name]}
						onChange={handleJobFormChange}
					/>
				))}
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
