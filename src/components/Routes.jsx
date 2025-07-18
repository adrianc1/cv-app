import App from '../app/App';
import Builder from '../pages/Builder';
import ErrorPage from './ErrorPage';

const routes = [
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: 'builder',
		element: <Builder />,
	},
];

export default routes;
