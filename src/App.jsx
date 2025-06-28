import { useState, useEffect } from 'react';
import Name from './Name';
import Email from './Email';
import Phone from './Phone';
import Paper from './Paper';
import Education from './Education';
import Professional from './Professional';
import resumeLogo from './resumelogo.png';

import './App.css';

function Form({ children }) {
	return (
		<form
			action=""
			className="flex flex-col w-full h-full flex-1 justify-around items-center"
		>
			<div className="title flex items-center justify-center gap-3">
				<img src={resumeLogo} alt="" className="w-1/10 h-1/10" />
				<h1 className="text-3xl font-bold my-8">CV/Resume Builder</h1>
			</div>
			{children}
		</form>
	);
}

export default function App() {
	const [name, setName] = useState({ firstName: '', lastName: '' });
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [jobForm, setJobForm] = useState({
		company: '',
		job: '',
		description: [],
		startDate: '',
		endDate: '',
	});
	const [jobArray, setJobArray] = useState([]);
	const [schoolForm, setSchoolForm] = useState({
		school: '',
		cert: '',
		startDate: '',
		endDate: '',
	});

	const [schoolArray, setSchoolArray] = useState([]);

	function handleJobFormChange(e) {
		const { name, value } = e.target;
		setJobForm((prev) => ({ ...prev, [name]: value }));
	}

	function handleSchoolFormChange(e) {
		const { name, value } = e.target;
		setSchoolForm((prev) => ({ ...prev, [name]: value }));
	}

	function handleAddResponsibility(d) {
		console.log(d);
	}

	function handleAddJob(e) {
		e.preventDefault();
		const newJob = {
			id: crypto.randomUUID(),
			...jobForm,
		};
		setJobArray((prev) => [...prev, newJob]);

		setJobForm({
			company: '',
			job: '',
			description: [],
			startDate: '',
			endDate: '',
		});
		console.log(jobArray);
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

	function handlePhoneChange(e) {
		setPhone(e.target.value);
	}

	function handleFirstNameChange(e) {
		setName({ ...name, firstName: e.target.value });
	}
	function handleLastNameChange(e) {
		setName({ ...name, lastName: e.target.value });
	}

	function handleEmailChange(e) {
		setEmail(e.target.value);
	}

	return (
		<div className="flex flex-col lg:flex-row lg:w-full mx-auto w-9/10 h-auto">
			<Form>
				<div className="w-full lg:w-3/4 general-info h-auto flex flex-col gap-5 mb-4">
					<h2 className="text-2xl font-bold">General Information</h2>
					<Name
						name={name}
						handleFirstNameChange={handleFirstNameChange}
						handleLastNameChange={handleLastNameChange}
					/>
					<Email email={email} handleEmailChange={handleEmailChange} />
					<Phone phone={phone} handlePhoneChange={handlePhoneChange} />
					<button
						className="w-1/3 bg-indigo-600 hover:bg-blue-700 text-white rounded mx-auto mt-2 py-1"
						onClick={(e) => e.preventDefault()}
					>
						Save Info
					</button>
				</div>

				<div className="general-info w-full lg:w-3/4 flex flex-col my-8">
					<h2 className="text-2xl font-bold">Educational Experience</h2>

					<Education
						schoolArray={schoolArray}
						schoolForm={schoolForm}
						setSchoolArray={setSchoolArray}
						handleSchoolFormChange={handleSchoolFormChange}
						handleAddSchool={handleAddSchool}
					/>
				</div>

				<div className="general-info flex flex-col w-full lg:w-3/4 gap-2 my-8">
					<h2 className="text-2xl font-bold">Professional Experience</h2>
					<Professional
						jobArray={jobArray}
						setJobArray={setJobArray}
						handleAddJob={handleAddJob}
						handleJobFormChange={handleJobFormChange}
						jobForm={jobForm}
						handleAddResponsibility={handleAddResponsibility}
					/>
				</div>
			</Form>
			<Paper
				name={name}
				email={email}
				phone={phone}
				education={schoolArray}
				jobs={jobArray}
			/>
		</div>
	);
}
