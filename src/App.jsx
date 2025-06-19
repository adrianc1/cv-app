import { useState } from 'react';
import Name from './Name';
import Email from './Email';
import Phone from './Phone';
import Paper from './Paper';
import Education from './Education';
import Professional from './Professional';

import './App.css';

function Form({ children }) {
	return (
		<form action="" className="pl-4 w-full flex-1">
			{children}
		</form>
	);
}

export default function App() {
	const [name, setName] = useState({ firstName: '', lastName: '' });
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [schoolArray, setSchoolArray] = useState([]);
	const [schoolName, setSchoolName] = useState('');
	const [schoolYear, setSchoolYear] = useState(0);
	const [degree, setDegree] = useState('');
	const [jobArray, setJobArray] = useState([]);
	const [companyName, setCompanyName] = useState('');
	const [jobTitle, setJobTitle] = useState('');
	const [jobYears, setJobYears] = useState(0);

	function handleAddJob(e) {
		e.preventDefault();
		const newJob = { company: companyName, job: jobTitle, year: jobYears };
		setJobArray((j) => [...j, newJob]);
		setCompanyName('');
		setJobYears('');
		setJobTitle('');
	}

	function handleCompanyChange(e) {
		setCompanyName(e.target.value);
	}
	function handleJobYearsChange(e) {
		setJobYears(e.target.value);
	}
	function handleJobTitleChange(e) {
		setJobTitle(e.target.value);
	}

	function handleAddSchool(e) {
		e.preventDefault();
		const newSchool = { school: schoolName, cert: degree, year: schoolYear };
		setSchoolArray((s) => [...s, newSchool]);
		setSchoolName('');
		setSchoolYear(0);
		setDegree('');
	}

	function handleSchoolNameChange(e) {
		setSchoolName(e.target.value);
	}

	function handleDegreeChange(e) {
		setDegree(e.target.value);
	}

	function handleYearsChange(e) {
		setSchoolYear(e.target.value);
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
		<div className="flex w-full">
			<Form>
				<div className="general-info flex flex-col w-1/2 gap-2 ">
					<h2>General Information</h2>
					<Name
						name={name}
						handleFirstNameChange={handleFirstNameChange}
						handleLastNameChange={handleLastNameChange}
					/>
					<Email email={email} handleEmailChange={handleEmailChange} />
					<Phone phone={phone} handlePhoneChange={handlePhoneChange} />
				</div>

				<div className="general-info flex flex-col w-1/2 gap-2">
					<h2>Educational Experience</h2>
					<Education
						schoolName={schoolName}
						schoolYear={schoolYear}
						degree={degree}
						handleSchoolNameChange={handleSchoolNameChange}
						handleDegreeChange={handleDegreeChange}
						handleYearsChange={handleYearsChange}
						handleAddSchool={handleAddSchool}
					/>
				</div>

				<div className="general-info flex flex-col w-1/2 gap-2">
					<h2>Professional Experience</h2>
					<Professional
						companyName={companyName}
						jobTitle={jobTitle}
						jobYears={jobYears}
						handleAddJob={handleAddJob}
						handleCompanyChange={handleCompanyChange}
						handleJobYearsChange={handleJobYearsChange}
						handleJobTitleChange={handleJobTitleChange}
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
