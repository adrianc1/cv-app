export default function SelectFont({ currentFont, setCurrentFont }) {
	const fontOptions = [
		{ label: 'Arial', value: 'Arial, sans-serif' },
		{ label: 'Georgia', value: 'Georgia, serif' },
		{ label: 'Poppins', value: 'Poppins, sans-serif' },
	];
	return (
		<>
			<div className="w-1/4 flex flex-col">
				<label htmlFor="accent-color">Select Font</label>
				<select
					name="accent-color"
					id="accent-color"
					value={currentFont}
					className="w-1/2 border border-gray-300  rounded-md focus:ring focus:ring-blue-200 "
					onChange={(e) => {
						setCurrentFont(e.target.value);
					}}
				>
					{fontOptions.map((font) => {
						return (
							<option key={font.value} value={font.value}>
								{font.label}
							</option>
						);
					})}
				</select>
			</div>
		</>
	);
}
