import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

export default function Login() {
	const updateAccessToken = useAuth((state) => state.updateAccessToken);
	const updateUser = useAuth((state) => state.updateUser);

	const [name, setName] = useState('');

	const onLogin = async (e) => {
		e.preventDefault();

		try {
			const req = await fetch('http://localhost:3000/login', {
				method: 'POST',
				body: JSON.stringify({ name }),
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const res = await req.json();

			updateAccessToken(res.data.accessToken);
			updateUser(res.data.user);
		} catch (error) {
			console.log('__ ERROR LOGGIN IN');
		}
	};

	return (
		<main>
			<header className='text-center'>
				<h1>Login Page</h1>
			</header>
			<form
				className='flex flex-col w-full max-w-xl mx-auto'
				onSubmit={onLogin}
			>
				<div className='flex flex-col'>
					<label htmlFor='name' className='mb-1'>
						Name
					</label>
					<input
						type='text'
						name='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className='mt-4'>
					<button type='submit' className='block w-full'>
						Log In
					</button>
				</div>
			</form>
		</main>
	);
}
