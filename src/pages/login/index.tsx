import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/userContext';
import { Container, Logo, Title, SubTitle, LoginContainer, LoginInput, ButtonContainer, SignInButton, LoginButton } from './styles';
import Google from '../../assets/google.png';

function Login() {

	const { handleLogin } = useContext(UserContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div style={{position: 'absolute', zIndex: '1000', width: '100vw', height: '100vh', backgroundColor: 'white'}}>
			<Container>
				<Logo src={Google} alt="Google Logo" />
				<Title>Fazer Login</Title>
				<SubTitle>Prosseguir no YouTube</SubTitle>

				<LoginContainer>
					<LoginInput type="email" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} autoFocus />
					<LoginInput type="password" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
				</LoginContainer>

				<ButtonContainer>
					<SignInButton>Criar Conta</SignInButton>
					<LoginButton onClick={() => handleLogin(email, password)}>Próxima</LoginButton>

				</ButtonContainer>
	
			</Container>
		</div>
	);
};

export default Login;