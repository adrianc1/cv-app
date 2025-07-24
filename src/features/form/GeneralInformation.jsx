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
	isDisabled,
	setIsDisabled,
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
				isDisabled={isDisabled}
			/>
			<Email
				email={email}
				handleEmailChange={(e) => setEmail(e.target.value)}
				isDisabled={isDisabled}
			/>
			<Phone
				phone={phone}
				handlePhoneChange={(e) => setPhone(e.target.value)}
				isDisabled={isDisabled}
			/>
			<Location
				location={location}
				handleLocationChange={(e) => setLocation(e.target.value)}
				isDisabled={isDisabled}
			/>
			<button
				className={`w-1/2 font-semibold rounded-md mx-auto mt-2 py-2 transition duration-300 ease-in-out transform hover:scale-105 ${
					isDisabled
						? 'bg-gray-600 hover:bg-gray-700 text-white'
						: 'bg-indigo-600 hover:bg-indigo-700 text-white'
				}`}
				onClick={(e) => {
					e.preventDefault();
					setIsDisabled((prev) => !prev);
				}}
			>
				{isDisabled ? 'Edit Info' : 'Save Info'}
			</button>
		</div>
	);
}

export default GeneralInformationForm;
