import { useNavigate } from 'react-router-dom';
export default function Nav() {
	const navigate = useNavigate();
	return (
		<>
			<nav className="h-16 w-full shadow-md flex items-center justify-between px-4 sm:px-8 z-1000">
				{' '}
				<div
					onClick={() => navigate('/')}
					className="font-bold text-xl text-indigo-600 pointer"
				>
					EZ Resume Builder
				</div>
				<button
					onClick={() => {
						navigate('/builder');
						window.scrollTo({ top: 0, behavior: 'smooth' });
					}}
					className="rounded-xl px-4 py-2 bg-gradient-to-r from-pink-500 to-indigo-500 text-white text-sm font-semibold hover:from-pink-600 hover:to-indigo-600 transition-all duration-300 shadow-md"
				>
					Get Started
				</button>
			</nav>
		</>
	);
}
