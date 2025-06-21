import { useState } from 'react';

export default function Professional({
	companyName,
	jobTitle,
	jobYears,
	handleCompanyChange,
	handleJobTitleChange,
	handleJobYearsChange,
	handleAddJob,
}) {
	return (
		<div className="w-full flex flex-col">
			<input
				type="text"
				value={companyName}
				placeholder="Company Name"
				onChange={handleCompanyChange}
			/>

			<input
				type="text"
				value={jobTitle}
				placeholder="Job Title"
				onChange={handleJobTitleChange}
			/>
			<input
				type="number"
				value={jobYears}
				placeholder="Number of Years"
				onChange={handleJobYearsChange}
			/>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
				onClick={handleAddJob}
			>
				{' '}
				Add Job
			</button>
		</div>
	);
}
