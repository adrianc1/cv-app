import { useState } from 'react';

export default function Skills({
	skillsArray,
	setSkillsArray,
	handleSkillInputChange,
	handleAddSkill,
	skill,
}) {
	const [editingId, setEditingId] = useState(null);

	function deleteListItem(id, arr) {
		const filteredArray = arr.filter((el) => el.id !== id);
		setSkillsArray(filteredArray);
	}

	function startEditing(id) {
		setEditingId(id);
	}

	function stopEditing() {
		setEditingId(null);
	}

	return (
		<div className="w-full flex flex-col ">
			{skillsArray.map((item) => {
				return (
					<li key={item.id} className="list-none mt-2">
						{editingId === item.id ? (
							<div className="flex flex-col gap-2">
								<input
									type="text"
									value={item.skill}
									placeholder="hey"
									onChange={(e) => {
										setSkillsArray((prev) => {
											return prev.map((item) => {
												if (item.id === editingId) {
													return { ...item, skill: e.target.value };
												} else {
													return item;
												}
											});
										});
									}}
								/>

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
									{item.skill}
								</p>

								<div className="flex gap-2 flex-shrink-0">
									<button
										className="w-[80px] h-[30px] hover:bg-blue-700 hover:text-white text-blue-500 font-bold rounded border"
										onClick={(e) => {
											e.preventDefault();
											startEditing(item.id);
										}}
									>
										Edit
									</button>

									<button
										className="w-[80px] h-[30px] hover:bg-red-700 hover:text-white text-red-500 font-bold rounded border"
										onClick={(e) => {
											e.preventDefault();
											deleteListItem(item.id, skillsArray);
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
				<input
					type="text"
					name="skill"
					placeholder="Skill"
					value={skill}
					onChange={handleSkillInputChange}
				/>

				<button
					className="w-1/3 bg-indigo-600 hover:bg-blue-700 text-white rounded mx-auto mt-2 py-1"
					onClick={handleAddSkill}
				>
					{' '}
					Add Skill
				</button>
			</div>
		</div>
	);
}
