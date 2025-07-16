export default function SelectTemplate({ template, setTemplate }) {
	return (
		<>
			<div className="w-1/4 flex flex-col">
				<label htmlFor="accent-color">Select Template</label>
				<select
					name="template"
					id="template"
					value={template}
					className="w-1/2 border border-gray-300  rounded-md focus:ring focus:ring-blue-200 "
					onChange={(e) => {
						setTemplate(e.target.value);
					}}
				>
					<option value="modern">Modern</option>
				</select>
			</div>
		</>
	);
}
