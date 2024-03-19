import { createContext, useEffect, useState } from 'react';
import api from '../api';

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
	const [login, setLogin] = useState(false);
	const [user, setUser] = useState({});
	const [token, setToken] = useState(localStorage.getItem('token') as string);

	const navigateTo = (path: any) => {
		window.location.href = path;
	};

	const getUser = (token: string) => {
		api.get('/user/get-user', {headers:{Authorization: token}}).then(({ data }) => {
			setUser(data.user);
			setLogin(true);
		}).catch((error) => {
			console.log('Usuário não autenticado', error);
		})
	}

	useEffect(() => {
		getUser(token);
	}, [token])

	const logOut = () => {
		localStorage.removeItem('token');
		setLogin(false);
		setUser({});
	}

	const handleLogin = (email: string, password: string) => {
		api.post('/user/sign-in', {email, password}).then(({ data }) => {
			setLogin(true);
			localStorage.setItem('token', data.token);
			setToken(data.token);
			getUser(data.token);
			navigateTo('/');
		}).catch((error) => {
			console.log('Não foi possível fazer o login', error);
		})
	}

	const handleCreateAccount = (name: string, email: string, password: string) => {
		api.post('/user/sign-up', {name, email, password}).then(() => {
			handleLogin(email, password);
		}).catch((error) => {
			console.log('Não foi possível criar o usuário', error);
		})
	}

	return(
		<UserContext.Provider value={{
			login,
			user, 
			handleLogin,
			logOut,
			handleCreateAccount,
		}}>
			{children}
		</UserContext.Provider>
	)

}
