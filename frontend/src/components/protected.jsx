import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Protected({ children }) {
	const navigate = useNavigate();
	const accessToken = useAuth((state) => state.accessToken);
	const [authenticating, setAuthenticating] = useState(true);

	useEffect(
		function checkIfUserIsAuthenticated() {
			(async () => {
				// await new Promise((r) => setTimeout(r, 800));
				if (!accessToken) return navigate('/login');

				setAuthenticating(false);
			})();
		},
		[accessToken]
	);

	if (authenticating)
		return <div className='text-center text-4xl'>Authenticating</div>;

	return <>{children}</>;
}
