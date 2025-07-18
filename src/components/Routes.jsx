import App from '../app/App';
import Builder from '../pages/Builder';
import Landing from '../pages/Landing';
import ErrorPage from './ErrorPage';

const routes = [
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Landing />,
			},
			{
				path: 'builder',
				element: <Builder />,
			},
		],
	},
];

export default routes;
