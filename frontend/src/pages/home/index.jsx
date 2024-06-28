import { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		fetch('http://localhost:3000', {
			credentials: 'include',
		})
			.then((res) => res.json())
			.then(console.log);
	}, []);

	return (
		<main>
			<header>
				<h1>Home Page</h1>
			</header>
		</main>
	);
}
