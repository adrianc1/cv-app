import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Builder from '../pages/Builder';
import Landing from '../pages/Landing';
import Footer from '../components/Footer';
import './App.css';

export default function App() {
	return (
		<div className="flex w-full flex-col lg:w-full mx-auto  h-auto">
			<Nav />
			<Outlet />
			<Footer />
		</div>
	);
}
