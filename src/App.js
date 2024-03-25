import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/header";
import Menu from './components/menu';
import Home from './pages/home';
import Library from './pages/library';
import History from './pages/history';
import { useContext } from 'react';
import { MenuContext } from './contexts/menuContext';
import Login from './pages/login';
import Shorts from './pages/shorts';
import Subscriptions from './pages/subscription';
import Music from './pages/music';
import SignUp from './pages/sign-up';
import MyVideos from './pages/my-videos';


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
							<Route path='/login' element={<Login />} />		
							<Route path='/sign-up' element={<SignUp />} />		
							<Route path='/my-videos' element={<MyVideos />} />		
							<Route path='/shorts' element={<Shorts/>} />
							<Route path='/subscriptions' element={<Subscriptions/>} />
							<Route path='/music' element={<Music/>} />
							<Route path='/library' element={<Library />} />
							<Route path='/history' element={<History />} />
						</Routes>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;

// Desafios:
// 1- Deixar a tela de login no padrão OK
// 2- Implementar um dropdown do ícone de usuário OK
// 3- Criar a tela e integração para cadastro de usuário OK


// 4- Criar a tela e integração para cadastro de vídeo
// 5- Implementação de pesquisa

// No dropdown colocar um botao para ir para uma pagina que mostre os videos do usuario