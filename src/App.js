import Header from "./components/header";
import Menu from './components/menu';
// import { useContext } from 'react';
// import { MenuContext } from '../src/contexts/menuContext';
function App() {

	// const {menu} = useContext(MenuContext);

	return (
		<div className="App">
		<Header />
		<div style={{ width: '100%', display: 'flex '}}>
			<Menu />
			<div style={{background: '#f8f8f8', width: '100%'}}>
				
			</div>
		</div>
		</div>
	);
}

export default App;
