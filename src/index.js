import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MenuStore } from './contexts/menuContext';
import { UserStorage } from './contexts/userContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<MenuStore>
			<UserStorage>
   			<App />
			</UserStorage>
		</MenuStore>
	</React.StrictMode>
);
