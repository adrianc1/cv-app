import { Routes, Route } from 'react-router';
import Nav from '../components/Nav';
import Home from '../pages/Home';
import Landing from '../pages/Landing';
import Footer from '../components/Footer';
import './App.css';

export default function App() {
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
