import { createContext, useEffect, useState } from 'react';
import api from '../api';

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
	const [login, setLogin] = useState(false);
	const [user, setUser] = useState({});
	const [token, setToken] = useState(localStorage.getItem('token') as string);

	const [loginError, setLoginError] = useState(false)
	const [nameError, setNameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('Use 9 caracteres com uma combinação de letras, números e símbolos.');


	const navigateTo = (path: any) => {
		window.location.href = path;
	};

	interface FormFields {
		name: string;
		email: string;
		password: string;
		password2: string;
	}

	const checkLogin = (formData: FormFields) => {
		const { name, email, password, password2 } = formData;
		const errors: { [key: string]: string } = {};
		const containsNumber = /\d/.test(password); 
		const containsSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

		if (name.trim() === '') {
			errors.name = 'Digite o seu nome';
		}

		if (email.trim() === '' || !email.includes('@')) {
			errors.email = 'E-mail inválido';
		}

		if (password.trim() === '' || password.length < 8 || !containsNumber || !containsSpecialChar) {
			errors.password = 'Digite uma senha válida';
		}

		if (password !== password2) {
			errors.password = 'As senhas não coincidem';
		}

		if (Object.keys(errors).length > 0) {
			return errors;
		}

		setPasswordError('Use 9 caracteres com uma combinação de letras, números e símbolos.');
		return 'ok';
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
			setLoginError(false)
			localStorage.setItem('token', data.token);
			setToken(data.token);
			getUser(data.token);
			navigateTo('/');
		}).catch((error) => {
			console.log('Não foi possível fazer o login', error);
			setLoginError(true)
		})
	}

	const handleCreateAccount = (name: string, email: string, password: string, password2: string) => {

		const loginCheckResult = checkLogin({ name, email, password, password2 });

   	if (typeof loginCheckResult === 'object') {
			setNameError(loginCheckResult.name || '');
			setEmailError(loginCheckResult.email || '');
			setPasswordError(loginCheckResult.password || '');
			return;
   	}

		api.post('/user/sign-up', {name, email, password}).then(() => {
			setNameError('');
			setEmailError('');
			setPasswordError('');
			handleLogin(email, password);

		}).catch((error) => {
			console.log('Não foi possível criar o usuário', error);
		})
		

	}

	return(
		<UserContext.Provider value={{
			login,
			user,
			nameError, 
			emailError, 
			passwordError, 
			loginError,
			handleLogin,
			logOut,
			handleCreateAccount,
		}}>
			{children}
		</UserContext.Provider>
	)

}
