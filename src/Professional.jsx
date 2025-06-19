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
			<button className="bg-amber-700" onClick={handleAddJob}>
				{' '}
				Add Job
			</button>
		</div>
	);
}
