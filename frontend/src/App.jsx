import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Navbar from './components/nav';
import IntializeConfig from './components/intialize-config';

function App() {
	return (
		<IntializeConfig>
			<Router>
				<Navbar />
				<div className='min-h-screen'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
					</Routes>
				</div>
			</Router>
		</IntializeConfig>
	);
}

export default App;
