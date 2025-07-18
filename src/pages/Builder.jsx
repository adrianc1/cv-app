import { useState } from 'react';
import Paper from '../features/paper/Paper';
import Education from '../features/form/Education';
import Professional from '../features/form/Professional';
import Skills from '../features/form/Skills';
import Landing from './Landing';
import FormWrapper from '../features/form/FormWrapper';
import Nav from '../components/Nav';
import Accordion from '../features/form/Accordion';
import GeneralInformationForm from '../features/form/GeneralInformation';

export default function Home() {
	const [showFields, setShowFields] = useState(true);
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

	return (
		<>
			{showLanding ? (
				<Landing setShowLanding={setShowLanding} />
			) : (
				<div className="lg:flex lg:flex-row">
					<FormWrapper setShowFields={setShowFields} showFields={showFields}>
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
								jobForm={jobForm}
								newDuty={newDuty}
								setNewDuty={setNewDuty}
								setJobForm={setJobForm}
							/>
						</Accordion>

						<Accordion title="Education" defaultOpen={true}>
							<Education
								schoolArray={schoolArray}
								schoolForm={schoolForm}
								setSchoolArray={setSchoolArray}
								setSchoolForm={setSchoolForm}
							/>
						</Accordion>

						<Accordion title="Skills" defaultOpen={true}>
							<Skills
								skill={skill}
								setSkill={setSkill}
								setSkillsArray={setSkillsArray}
								skillsArray={skillsArray}
							/>
						</Accordion>
					</FormWrapper>
					{/* Desktop */}
					<div className={`hidden lg:block flex-3`}>
						<Paper
							name={name}
							email={email}
							phone={phone}
							education={schoolArray}
							jobs={jobArray}
							skills={skillsArray}
						/>
					</div>
					{/* mobile paper resume */}
					<div
						className={`${showFields ? 'hidden' : 'block'} lg:hidden flex-3`}
					>
						<Paper
							name={name}
							email={email}
							phone={phone}
							education={schoolArray}
							jobs={jobArray}
							skills={skillsArray}
						/>
					</div>
				</div>
			)}
		</>
	);
}
