export default function SelectColor({ accentColor, setAccentColor }) {
	return (
		<>
			{/* Select Color */}
			<div className="w-1/4 flex flex-col">
				<label htmlFor="accent-color">Select Color</label>
				<select
					name="accent-color"
					id="accent-color"
					value={accentColor}
					className="w-1/2 border border-gray-300  rounded-md focus:ring focus:ring-blue-200"
					onChange={(e) => {
						setAccentColor(e.target.value);
					}}
				>
					<option value="indigo">Indigo</option>
					<option value="black">Black</option>
					<option value="red">Red</option>
					<option value="blue">Blue</option>
				</select>
			</div>
		</>
	);
}
