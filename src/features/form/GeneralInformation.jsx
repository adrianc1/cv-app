import Email from './Email';
import Phone from './Phone';
import Name from './Name';
import Location from './Location';

// Phone Component (placeholder)

// NEW: GeneralInformationForm Component

function GeneralInformationForm({
	name,
	setName,
	email,
	setEmail,
	phone,
	setPhone,
	location,
	setLocation,
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
			<Location
				location={location}
				handleLocationChange={(e) => setLocation(e.target.value)}
			/>
		</div>
	);
}

export default GeneralInformationForm;
