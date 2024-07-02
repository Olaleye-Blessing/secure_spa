import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
	const accessToken = useAuth((state) => state.accessToken);

	return (
		<nav className='border-b'>
			<ul className='flex items-center justify-center space-x-8 px-4 py-2'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/login'>Login</Link>
				</li>
			</ul>
			<p className='px-4 pb-2 break-words'>User Token: {accessToken}</p>
		</nav>
	);
}
