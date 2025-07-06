import { useState } from 'react';
import Paper from './Paper';
import Education from './Education';
import Professional from './Professional';
import resumeLogo from './resumelogo.png';
import Skills from './Skills';
import Landing from './Landing';
import './App.css';

function Accordion({ title, children, defaultOpen = true }) {
	const [isOpen, setIsOpen] = useState(defaultOpen);

	return (
		<div className="general-info flex flex-col w-full lg:w-3/4 gap-2 my-8">
			<h2
				className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors flex items-center gap-2 select-none"
				onClick={() => setIsOpen(!isOpen)}
			>
				{title}
				<span
					className="text-lg transition-transform duration-200"
					style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
				>
					▶
				</span>
			</h2>
			<div
				className={`transition-all duration-300 ease-in-out overflow-hidden ${
					isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
				}`}
			>
				<div className="pt-2">{children}</div>
			</div>
		</div>
	);
}

function Form({ children }) {
	return (
		<form
			action=""
			className="flex flex-col w-full h-full flex-1 justify-around items-center"
		>
			<div className="title flex items-center justify-center gap-4">
				<img src={resumeLogo} alt="" className="w-1/10 h-1/10" />
				<h1 className="text-3xl font-bold my-8 text-primary">
					EZ Resume Builder
				</h1>
			</div>
			{children}
		</form>
	);
}

const Name = ({
	name = { firstName: '', lastName: '' },
	handleFirstNameChange,
	handleLastNameChange,
}) => (
	<div className="mb-4">
		<label
			htmlFor="firstName"
			className="block text-sm font-medium text-gray-700"
		>
			First Name
		</label>
		<input
			type="text"
			id="firstName"
			value={name.firstName}
			onChange={handleFirstNameChange}
			className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
			placeholder="John"
		/>
		<label
			htmlFor="lastName"
			className="block text-sm font-medium text-gray-700 mt-2"
		>
			Last Name
		</label>
		<input
			type="text"
			id="lastName"
			value={name.lastName}
			onChange={handleLastNameChange}
			className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
			placeholder="Doe"
		/>
	</div>
);

// Email Component (placeholder)
const Email = ({ email, handleEmailChange }) => (
	<div className="mb-4">
		<label htmlFor="email" className="block text-sm font-medium text-gray-700">
			Email
		</label>
		<input
			type="email"
			id="email"
			value={email}
			onChange={handleEmailChange}
			className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
			placeholder="john.doe@example.com"
		/>
	</div>
);

// Phone Component (placeholder)
const Phone = ({ phone, handlePhoneChange }) => (
	<div className="mb-4">
		<label htmlFor="phone" className="block text-sm font-medium text-gray-700">
			Phone
		</label>
		<input
			type="tel"
			id="phone"
			value={phone}
			onChange={handlePhoneChange}
			className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
			placeholder="(123) 456-7890"
		/>
	</div>
);

// NEW: GeneralInformationForm Component

function GeneralInformationForm({
	name,
	setName,
	email,
	setEmail,
	phone,
	setPhone,
}) {
	return (
		// Applied styling from the Professional component's "Add New Job" form wrapper
		<div className="flex flex-col gap-3 p-4 bg-gray-50 rounded-lg border shadow-md">
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
		</div>
	);
}

export default function App() {
	const [name, setName] = useState({ firstName: '', lastName: '' });
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [newDuty, setNewDuty] = useState('');
	const [showLanding, setShowLanding] = useState(true);

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

	function Footer() {
		return (
			<footer>
				<div className="mx-auto py-8 text-center">
					{' '}
					2025 &copy;{' '}
					<a href="https://dreauxdigital.com/" className="text-blue-700">
						Dreaux Digital.
					</a>{' '}
					All Rights Reserved.
				</div>
			</footer>
		);
	}

	return (
		<div className="flex w-full flex-col lg:w-full mx-auto  h-auto">
			<nav className="h-16 w-full shadow-md flex items-center justify-between px-4 sm:px-8">
				{' '}
				{/* Added px for horizontal padding, justify-between */}
				<span
					onClick={() => setShowLanding(true)}
					className="font-bold text-xl text-indigo-600 pointer"
				>
					EZ Resume Builder
				</span>
				<button
					onClick={() => {
						setShowLanding(false);
						window.scrollTo({ top: 0, behavior: 'smooth' });
					}}
					className="rounded-xl px-4 py-2 bg-gradient-to-r from-pink-500 to-indigo-500 text-white text-sm font-semibold hover:from-pink-600 hover:to-indigo-600 transition-all duration-300 shadow-md"
				>
					Get Started
				</button>
			</nav>
			{showLanding ? (
				<Landing setShowLanding={setShowLanding} />
			) : (
				<div className="lg:flex lg:flex-row">
					<Form>
						<Accordion title="General Information" defaultOpen={true}>
							<GeneralInformationForm
								name={name}
								setName={setName}
								email={email}
								setEmail={setEmail}
								phone={phone}
								setPhone={setPhone}
							/>
						</Accordion>
						<Accordion title="Professional Experience" defaultOpen={true}>
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
						</Accordion>

						<Accordion title="Education" defaultOpen={true}>
							<Education
								schoolArray={schoolArray}
								schoolForm={schoolForm}
								setSchoolArray={setSchoolArray}
								handleSchoolFormChange={handleSchoolFormChange}
								handleAddSchool={handleAddSchool}
							/>
						</Accordion>

						<Accordion title="Skills" defaultOpen={true}>
							<Skills
								handleSkillInputChange={handleSkillInputChange}
								handleAddSkill={handleAddSkill}
								skill={skill}
								setSkill={setSkill}
								setSkillsArray={setSkillsArray}
								skillsArray={skillsArray}
							/>
						</Accordion>
					</Form>
					<Paper
						name={name}
						email={email}
						phone={phone}
						education={schoolArray}
						jobs={jobArray}
						skills={skillsArray}
					/>
				</div>
			)}
			<Footer />
		</div>
	);
}
