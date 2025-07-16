import { Routes, Route } from 'react-router';
import Nav from '../components/Nav';
import Home from '../Home';
import Landing from '../Landing';
import './App.css';

export default function App() {
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
			<Nav />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="builder" element={<Home />} />
			</Routes>
			<Footer />
		</div>
	);
}
