import Protected from '../../components/protected';

function Page() {
	return (
		<main>
			<header>
				<h1>User Dashboard</h1>
			</header>
		</main>
	);
}

export default function Dashboard() {
	return (
		<Protected>
			<Page />
		</Protected>
	);
}
