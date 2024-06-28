import { useState } from 'react';

export default function Login() {
	const [name, setName] = useState('');

	const onLogin = async (e) => {
		e.preventDefault();
		console.log({ name });
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
