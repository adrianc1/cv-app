import { useState } from 'react';
import Name from './Name';
import Email from './Email';
import Phone from './Phone';
import Paper from './Paper';
import Education from './Education';
import Professional from './Professional';
import resumeLogo from './resumelogo.png';
import Skills from './Skills';
import Landing from './Landing';
import './App.css';

function Form({ children }) {
	return (
		<form
			action=""
			className="flex flex-col w-full h-full flex-1 justify-around items-center"
		>
			<div className="title flex items-center justify-center gap-3">
				<img src={resumeLogo} alt="" className="w-1/10 h-1/10" />
				<h1 className="text-3xl font-bold my-8 text-primary">
					EZ Resume Builder
				</h1>
			</div>
			{children}
		</form>
	);
}

export default function App() {
	const [name, setName] = useState({ firstName: '', lastName: '' });
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [newDuty, setNewDuty] = useState('');

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
	const [skill, setSkill] = useState('');
	const [skillsArray, setSkillsArray] = useState([]);

	function handleJobFormChange(e) {
		const { name, value } = e.target;
		setJobForm((prev) => ({ ...prev, [name]: value }));
	}

	function handleSchoolFormChange(e) {
		const { name, value } = e.target;
		setSchoolForm((prev) => ({ ...prev, [name]: value }));
	}

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

	function handleAddDuty(e) {
		e.preventDefault();
		setJobForm((prev) => ({
			...prev,
			description: [...prev.description, newDuty],
		}));
		setNewDuty('');
	}

	function handleAddJob(e) {
		e.preventDefault();

		let updatedJobForm = { id: crypto.randomUUID(), ...jobForm };

		if (newDuty.trim() !== '') {
			updatedJobForm.description = [
				...updatedJobForm.description,
				newDuty.trim(),
			];
			setNewDuty('');
		}

		setJobArray((prev) => [...prev, updatedJobForm]);
		setJobForm({
			company: '',
			job: '',
			description: [],
			startDate: '',
			endDate: '',
		});
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
		<div className="flex w-full flex-col lg:flex-row lg:w-full mx-auto  h-auto">
			<Landing />
			{/* <Form>
				<div className="w-full lg:w-3/4 general-info h-auto flex flex-col gap-5 mb-4 mt-8">
					<h2 className="text-2xl font-bold">General Information</h2>
					<Name
						name={name}
						handleFirstNameChange={(e) =>
							setName({ ...name, firstName: e.target.value })
						}
						handleLastNameChange={(e) =>
							setName({ ...name, lastName: e.target.value })
						}
					/>
					<Email
						email={email}
						handleEmailChange={(e) => setEmail(e.target.value)}
					/>
					<Phone
						phone={phone}
						handlePhoneChange={(e) => setPhone(e.target.value)}
					/>
					<button
						className="w-1/2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md mx-auto mt-2 py-2 transition duration-300 ease-in-out transform hover:scale-105"
						onClick={(e) => e.preventDefault()}
					>
						Save Info
					</button>
				</div>
				<div className="general-info flex flex-col w-full lg:w-3/4 gap-2 my-8">
					<h2 className="text-2xl font-bold">Professional Experience</h2>
					<Professional
						jobArray={jobArray}
						setJobArray={setJobArray}
						handleAddJob={handleAddJob}
						handleJobFormChange={handleJobFormChange}
						jobForm={jobForm}
						handleAddDuty={handleAddDuty}
						newDuty={newDuty}
						setNewDuty={setNewDuty}
					/>
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

				<div className="general-info w-full lg:w-3/4 flex flex-col my-8">
					<h2 className="text-2xl font-bold">Skills/Certifications</h2>
					<Skills
						handleSkillInputChange={handleSkillInputChange}
						handleAddSkill={handleAddSkill}
						skill={skill}
						setSkill={setSkill}
						setSkillsArray={setSkillsArray}
						skillsArray={skillsArray}
					/>
				</div>
			</Form>
			<Paper
				name={name}
				email={email}
				phone={phone}
				education={schoolArray}
				jobs={jobArray}
				skills={skillsArray}
			/> */}
		</div>
	);
}
