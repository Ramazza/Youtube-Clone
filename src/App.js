import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/header";
import Menu from './components/menu';
import Home from './pages/home';
import Library from './pages/library';
import History from './pages/history';
import { useContext } from 'react';
import { MenuContext } from './contexts/menuContext';
import Login from './pages/login';


function App() {

	const {menu} = useContext(MenuContext);

	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<div style={{ width: '100%', display: 'flex '}}>
					<Menu />
					<div style={{ width: menu? 'calc(100% - 250px)' : 'calc(100% - 70px)', padding: '15px 20px', boxSizing: 'border-box'}}>
						<Routes>
							<Route path='/' element={<Home/>} />
							<Route path='/library' element={<Library />} />
							<Route path='/history' element={<History />} />
							<Route path='/login' element={<Login />} />
						</Routes>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
