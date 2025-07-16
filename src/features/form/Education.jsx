import React, { useState } from 'react';

export default function Education({
	schoolArray,
	setSchoolArray,
	setSchoolForm,
	schoolForm,
}) {
	// State to manage which item is currently being edited
	const [editingId, setEditingId] = useState(null);

	// Defines the fields for education entries, used for both display and input forms
	const fields = [
		{ name: 'school', placeholder: 'School Name', type: 'text' },
		{ name: 'cert', placeholder: 'Degree/Certificate', type: 'text' },
		{ name: 'startDate', placeholder: 'Start Date', type: 'date' },
		{ name: 'endDate', placeholder: 'End Date', type: 'date' },
	];

	// Function to delete an education entry from the array
	function deleteListItem(id) {
		// Filters out the item with the given id and updates the state
		const filteredArray = schoolArray.filter((el) => el.id !== id);
		setSchoolArray(filteredArray);
	}

	// Function to set the ID of the item currently being edited
	function startEditing(id) {
		setEditingId(id);
	}

	// Function to clear the editing state
	function stopEditing() {
		setEditingId(null);
	}

	function handleSchoolFormChange(e) {
		const { name, value } = e.target;
		setSchoolForm((prev) => ({ ...prev, [name]: value }));
	}

	function handleAddSchool(e) {
		e.preventDefault();
		const newSchool = {
			id: crypto.randomUUID(),
			...schoolForm,
		};
		setSchoolArray((prev) => [...prev, newSchool]);

		setSchoolForm({
			school: '',
			cert: '',
			startDate: '',
			endDate: '',
		});
	}

	return (
		<div className="w-full flex flex-col gap-4">
			{/* Section to display and manage existing education entries */}
			{schoolArray.length > 0 && (
				<ul className="flex flex-col gap-3">
					{schoolArray.map((s) => (
						<li key={s.id} className="list-none w-full">
							{editingId === s.id ? (
								// Render input fields when an item is in editing mode
								<div className="flex flex-col gap-2 p-3 border border-indigo-300 rounded-lg shadow-sm bg-indigo-50">
									{fields.map((field) => (
										<input
											key={field.name}
											type={field.type}
											value={s[field.name]} // Bind input value directly to the item being edited
											placeholder={field.placeholder}
											onChange={(e) => {
												// Update the specific field of the item being edited
												setSchoolArray((prev) =>
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
								// Render display mode for education entry
								<div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 border border-gray-300 p-3 rounded-lg shadow-sm bg-white">
									<p className="flex-grow min-w-0 overflow-hidden break-words text-gray-800 font-medium">
										{s.school} - {s.cert} ({s.startDate} - {s.endDate})
									</p>

									<div className="flex gap-2 flex-shrink-0 mt-2 md:mt-0">
										<button
											className="w-[80px] bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
											onClick={(e) => {
												e.preventDefault();
												startEditing(s.id); // Enter editing mode for this item
											}}
										>
											Edit
										</button>
										<button
											className="w-[80px] bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
											onClick={(e) => {
												e.preventDefault();
												deleteListItem(s.id); // Delete this item
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

			{/* Section to add a new school/education entry */}
			<div className="flex flex-col gap-3 mt-4 p-4 border rounded-lg shadow-md bg-gray-50">
				<h3 className="text-xl font-bold text-gray-700 mb-2">
					Add New Education
				</h3>
				{fields.map((field) => (
					<input
						key={field.name}
						name={field.name}
						type={field.type}
						placeholder={field.placeholder}
						value={schoolForm[field.name]} // Bind input value to the schoolForm state
						onChange={handleSchoolFormChange} // Handle changes to update schoolForm
						className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
					/>
				))}
				<button
					className="w-1/2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md mx-auto mt-2 py-2 transition duration-300 ease-in-out transform hover:scale-105"
					onClick={handleAddSchool} // Trigger function to add the new school
				>
					Add School
				</button>
			</div>
		</div>
	);
}
