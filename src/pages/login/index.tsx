import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/userContext';
import { Container, Logo, Title, SubTitle, LoginContainer, LoginInput, ButtonContainer, SignInButton, LoginButton, 
			LoginPage, ErrorText, ShowPasswordContainer, ShowPasswordButton, ShowPassword } from './styles';
import Google from '../../assets/google.png';
import { useNavigate } from 'react-router-dom';

function Login() {

	const { handleLogin, login, loginError } = useContext(UserContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowpassword] = useState('password');

	const navigate = useNavigate();

	const handleKeyPress = (event: any) => {
		if (event.key === 'Enter') {
			handleLogin(email, password);
		}
	};

	const showHidePassword = () => {
		if(showPassword === 'password'){
			setShowpassword('text');
		} else {
			setShowpassword('password');
		}
	}

	return (
		<LoginPage logged={login}>
			<Container>
				<Logo src={Google} alt="Google Logo" />
				<Title>Fazer Login</Title>
				<SubTitle>Prosseguir no YouTube</SubTitle>

				<LoginContainer>
					<LoginInput type="email" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} autoFocus />
					<LoginInput type={showPassword} placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={handleKeyPress}/>
					<ErrorText loginError={loginError}>E-mail ou senha incorretos. Tente novamente.</ErrorText>
					<ShowPasswordContainer onClick={showHidePassword}>
						<ShowPasswordButton showPassword={showPassword}></ShowPasswordButton>
						<ShowPassword>Mostrar senha</ShowPassword>
					</ShowPasswordContainer>
				</LoginContainer>
				<ButtonContainer>
					<SignInButton onClick={() => navigate('/sign-up')}>Criar Conta</SignInButton>
					<LoginButton onClick={() => handleLogin(email, password)}>Próxima</LoginButton>
				</ButtonContainer>
	
			</Container>
		</LoginPage>
	);
};

export default Login;