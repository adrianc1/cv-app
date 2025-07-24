const Location = ({ location, handleLocationChange, isDisabled }) => (
	<div className="mb-4">
		<label
			htmlFor="location"
			className="block text-sm font-medium text-gray-700"
		>
			Location
		</label>
		<input
			disabled={isDisabled}
			type="tel"
			id="location"
			value={location}
			onChange={handleLocationChange}
			className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
			placeholder="Los Angeles, CA 90210"
		/>
	</div>
);

export default Location;
