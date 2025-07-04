import { useState, React } from 'react';

export default function Professional({
	jobArray,
	setJobArray,
	jobForm,
	handleAddJob,
	handleJobFormChange,
	handleAddDuty,
	setNewDuty,
	newDuty,
}) {
	// State to manage which job item is currently being edited
	const [editingId, setEditingId] = useState(null);

	// Defines the fields for job entries, used for both display and input forms
	const fields = [
		{ name: 'company', placeholder: 'Company Name', type: 'text' },
		{ name: 'job', placeholder: 'Job Title', type: 'text' },
		{ name: 'startDate', placeholder: 'Start Date', type: 'date' },
		{ name: 'endDate', placeholder: 'End Date', type: 'date' },
	];

	// Function to set the ID of the item currently being edited
	function startEditing(id) {
		setEditingId(id);
	}

	// Function to clear the editing state
	function stopEditing() {
		setEditingId(null);
	}

	// Function to delete a job entry from the array
	function deleteListItem(id) {
		// Filters out the item with the given id and updates the state
		const filteredArray = jobArray.filter((el) => el.id !== id);
		setJobArray(filteredArray);
	}

	return (
		<div className="w-full flex flex-col gap-4">
			{/* Section to display and manage existing professional experience entries */}
			{jobArray.length > 0 && (
				<ul className="flex flex-col gap-3">
					{jobArray.map((j) => (
						<li key={j.id} className="list-none w-full">
							{editingId === j.id ? (
								// Render input fields when an item is in editing mode
								<div className="flex flex-col gap-2 p-3 border border-indigo-300 rounded-lg shadow-sm bg-indigo-50">
									{fields.map((field) => (
										<input
											key={field.name}
											type={field.type}
											value={j[field.name]} // Bind input value directly to the item being edited
											placeholder={field.placeholder}
											onChange={(e) => {
												// Update the specific field of the item being edited
												setJobArray((prev) =>
													prev.map((item) =>
														item.id === editingId
															? { ...item, [field.name]: e.target.value }
															: item
													)
												);
											}}
											className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
										/>
									))}
									<button
										className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
										onClick={(e) => {
											e.preventDefault(); // Prevent default form submission
											stopEditing(); // Exit editing mode
										}}
									>
										Done
									</button>
								</div>
							) : (
								// Render display mode for job entry
								<div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 border border-gray-300 p-3 rounded-lg shadow-sm bg-white">
									<div className="flex flex-col flex-grow min-w-0 max-h-36 overflow-hidden text-gray-800">
										<div className="flex flex-col pb-2">
											<div className="font-bold text-lg">{j.company} </div>
											<div className="text-md">
												{j.job} ({j.startDate.replace(/-/g, '/')} -{' '}
												{j.endDate.replace(/-/g, '/')})
											</div>
										</div>
										{j.description && j.description.length > 0 && (
											<ul className="list-disc list-inside max-h-36 overflow-auto text-gray-700 text-sm">
												{j.description.map((item, index) => (
													<li key={index}>{item}</li>
												))}
											</ul>
										)}
									</div>

									<div className="flex flex-col gap-2 flex-shrink-0 mt-2 md:mt-0">
										<button
											className="w-[80px] bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
											onClick={(e) => {
												e.preventDefault();
												startEditing(j.id); // Enter editing mode for this item
											}}
										>
											Edit
										</button>
										<button
											className="w-[80px] bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
											onClick={(e) => {
												e.preventDefault();
												deleteListItem(j.id); // Delete this item
											}}
										>
											Delete
										</button>
									</div>
								</div>
							)}
						</li>
					))}
				</ul>
			)}

			{/* Section to add a new job entry */}
			<div className="flex flex-col gap-3 mt-4 p-4 border rounded-lg shadow-md bg-gray-50">
				<h3 className="text-xl font-bold text-gray-700 mb-2">Add New Job</h3>
				{fields.map((field) => (
					<input
						key={field.name}
						name={field.name}
						type={field.type}
						placeholder={field.placeholder}
						value={jobForm[field.name]} // Bind input value to the jobForm state
						onChange={handleJobFormChange} // Handle changes to update jobForm
						className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
					/>
				))}
				<input
					key="description" // Unique key for this input
					name="description"
					type="text"
					placeholder="Responsibilities/Duties"
					value={newDuty}
					onChange={(e) => setNewDuty(e.target.value)} // Update newDuty state
					className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
				/>
				<button
					className="w-1/2 bg-indigo-400 hover:bg-indigo-500 text-white font-semibold rounded-md mx-auto py-2 transition duration-300 ease-in-out transform hover:scale-105"
					onClick={handleAddDuty} // Trigger function to add a new duty
				>
					+ Add New Duty
				</button>

				<button
					className="w-1/2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md mx-auto mt-2 py-2 transition duration-300 ease-in-out transform hover:scale-105"
					onClick={handleAddJob} // Trigger function to add the new job
				>
					Add Job
				</button>
			</div>
		</div>
	);
}
