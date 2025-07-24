import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import SelectColor from './SelectColor';
import SelectFont from './SelectFont';
import SelectTemplate from './SelectTemplate';

export default function Paper({
	name,
	email,
	phone,
	location,
	education,
	jobs,
	skills,
}) {
	const resumeRef = useRef(null);
	const [accentColor, setAccentColor] = useState('indigo');
	const [currentFont, setCurrentFont] = useState('Poppins, sans-serif');
	const [template, setTemplate] = useState('modern');

	const handlePrint = useReactToPrint({
		contentRef: resumeRef, // Use contentRef instead of content
		documentTitle: 'My_Resume',
		removeAfterPrint: true,
	});

	return (
		<div className={`flex flex-col overflow-x-auto w-full`}>
			<h2 className="text-4xl text-center my-4">Resume</h2>

			<div className="flex w-full justify-around items-center mb-4">
				<SelectColor
					accentColor={accentColor}
					setAccentColor={setAccentColor}
				/>
				<SelectFont currentFont={currentFont} setCurrentFont={setCurrentFont} />
				<SelectTemplate template={template} setTemplate={setTemplate} />
			</div>

			<div
				style={{ fontFamily: currentFont }}
				className="w-[816px] mx-auto transform scale-100  "
			>
				<div
					ref={resumeRef}
					className="h-[1056px] border border-gray-200 mt-0 lg:mt-0 rounded shadow-xl pl-4"
				>
					<div className="gen-info w-full text-center pt-6">
						<h2 className="text-4xl text-center mb-4">
							{name.firstName} {name.lastName}
						</h2>
						<div
							className={`contact-info flex justify-center gap-4 border-b w-[80%] mx-auto pb-2 ${
								accentColor === 'indigo' ? 'border-indigo-400' : ''
							} ${accentColor === 'black' ? 'border-black-400' : ''} ${
								accentColor === 'red' ? 'border-red-400' : ''
							} ${accentColor === 'blue' ? 'border-blue-400' : ''}`}
						>
							<p>{email}</p>|<p>{phone}</p>|<p>{location}</p>
						</div>
					</div>
					<h3 className="text-2xl px-4 mt-4">Professional Experience</h3>
					<ul>
						{jobs.map((job, index) => (
							<li key={index} className="my-4 px-4">
								<h3 className="font-bold">{job.company}</h3>
								<h4 className="italic">{job.job}</h4>
								<span className="text-xs">
									{job.startDate.replace(/-/g, '/')} -{' '}
									{job.endDate.replace(/-/g, '/')}
								</span>
								<ul className="mt-2">
									{job.description.map((duty, index) => (
										<li key={index}>{duty}</li>
									))}
								</ul>
							</li>
						))}
					</ul>
					<h3 className="text-2xl px-4 mt-4">Education</h3>
					<ul className="my-2">
						{education.map((ed) => (
							<li key={ed.id} className="my-4 px-4">
								<p>
									{ed.school} - {ed.cert}
								</p>
								<span className="text-xs">
									{ed.startDate.replace(/-/g, '/')} -{' '}
									{ed.endDate.replace(/-/g, '/')}
								</span>
							</li>
						))}
					</ul>
					<h3 className="text-2xl px-4 mt-4">Skills</h3>
					<ul>
						{skills.map((skill) => {
							return (
								<li key={skill.id} className="my-3 px-4">
									{skill.skill}
								</li>
							);
						})}
					</ul>
				</div>
				{/* Now inside the same scaled div, it will align perfectly */}
				<div className="flex justify-start self-end print:hidden md:justify-end my-4">
					<button
						className="w-1/2 bg-green-500 hover:bg-green-700 text-white font-semibold rounded-md mx-auto mt-2 py-2 transition duration-300 ease-in-out transform hover:scale-105"
						onClick={(e) => {
							e.preventDefault();
							console.log('resumeRef:', resumeRef.current);
							handlePrint();
						}}
					>
						Download Resume
					</button>
				</div>
			</div>
		</div>
	);
}
