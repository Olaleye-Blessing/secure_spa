import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export default function IntializeConfig({ children }) {
	const updateAccessToken = useAuth((state) => state.updateAccessToken);
	const updateUser = useAuth((state) => state.updateUser);

	const [loading, setLoading] = useState(true);

	useEffect(function getUserLoginDetails() {
		(async () => {
			try {
				setLoading(true);

				const req = await fetch('http://localhost:3000/refresh-token', {
					method: 'POST',
					credentials: 'include',
				});
				const res = await req.json();

				updateAccessToken(res.data.accessToken);
				updateUser(res.data.user);
			} catch (error) {
				console.log('__ ERROR REFRESHING RESPONSE');
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	if (loading) return <div className='text-center text-6xl'>Loading</div>;

	return <div>{children}</div>;
}
