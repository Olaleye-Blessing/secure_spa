import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Navbar from './components/nav';
import IntializeConfig from './components/intialize-config';
import Dashboard from './pages/dashboard';

function App() {
	return (
		<IntializeConfig>
			<Router>
				<Navbar />
				<div className='min-h-screen px-4'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/dashboard' element={<Dashboard />} />
					</Routes>
				</div>
			</Router>
		</IntializeConfig>
	);
}

export default App;
