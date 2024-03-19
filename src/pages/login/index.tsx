import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/userContext';
import { Container, Logo, Title, SubTitle, LoginContainer, LoginInput, ButtonContainer, SignInButton, LoginButton, LoginPage } from './styles';
import Google from '../../assets/google.png';
import { useNavigate } from 'react-router-dom';

function Login() {

	const { handleLogin, login } = useContext(UserContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const handleKeyPress = (event: any) => {
		if (event.key === 'Enter') {
			handleLogin(email, password);
		}
	};


	return (
		<LoginPage logged={login}>
			<Container>
				<Logo src={Google} alt="Google Logo" />
				<Title>Fazer Login</Title>
				<SubTitle>Prosseguir no YouTube</SubTitle>

				<LoginContainer>
					<LoginInput type="email" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} autoFocus />
					<LoginInput type="password" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={handleKeyPress}/>
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