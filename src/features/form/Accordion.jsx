import { useState } from 'react';
export default function Accordion({ title, children, defaultOpen = true }) {
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
