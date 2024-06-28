import { Link } from 'react-router-dom';

export default function Navbar() {
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
		</nav>
	);
}
