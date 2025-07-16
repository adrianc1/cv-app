import { useState } from 'react';

export default function Skills({
	skillsArray,
	setSkillsArray,
	skill,
	setSkill,
}) {
	const [editingId, setEditingId] = useState(null);

	function deleteListItem(id, arr) {
		const filteredArray = arr.filter((el) => el.id !== id);
		setSkillsArray(filteredArray);
	}

	function startEditing(id) {
		setEditingId(id);
	}

	// function stopEditing() {
	// 	setEditingId(null);
	// }

	function handleSkillInputChange(e) {
		setSkill(e.target.value);
	}

	function handleAddSkill(e) {
		e.preventDefault();
		const newSkill = {
			id: crypto.randomUUID(),
			skill,
		};
		setSkillsArray((prev) => [...prev, newSkill]);
		setSkill('');
	}

	return (
		<div className="w-full flex flex-col ">
			{skillsArray.map((s, skillIndex) => {
				return (
					<li key={skillIndex} className="list-none mt-2">
						{editingId === skillIndex ? null : ( //
							<div className="flex items-center justify-between w-full gap-4 border border-gray-500 p-2">
								<p className="flex-grow min-w-0 overflow-hidden break-words">
									{s.skill}
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
											deleteListItem(s.id, skillsArray);
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
					placeholder="Skill/Certification"
					value={skill}
					onChange={handleSkillInputChange}
					className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
				/>

				<button
					className="w-1/2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md mx-auto mt-2 py-2 transition duration-300 ease-in-out transform hover:scale-105"
					onClick={handleAddSkill}
				>
					{' '}
					Add Skill
				</button>
			</div>
		</div>
	);
}
