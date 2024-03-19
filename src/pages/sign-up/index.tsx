import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import { Container, Logo, Title, SubTitle, LoginContainer, LoginInput, ButtonContainer, SignInButton, LoginButton, SignInPage, PasswordContainer, PasswordInput } from './styles';
import Google from '../../assets/google.png';


function SignUp() {

	const { handleCreateAccount } = useContext(UserContext);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	return (
				<SignInPage>
					<Container>

						<Logo src={Google} alt="Google Logo" />
						<Title>Criar a sua conta neste projeto</Title>
						<SubTitle>Prosseguir no YouTube</SubTitle>

						<LoginContainer>
							<LoginInput type="text" placeholder='Nome e Sobrenome' value={name} onChange={(e) => setName(e.target.value)} autoFocus />
							<LoginInput type="email" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
							<PasswordContainer>
								<PasswordInput type="password" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
								<PasswordInput type="password" placeholder='Confirmar' />
							</PasswordContainer>
						</LoginContainer>

						<ButtonContainer>
							<SignInButton onClick={() => navigate('/login')}>Fazer login</SignInButton>
							<LoginButton onClick={() => handleCreateAccount(name, email, password)}>Próxima</LoginButton>
						</ButtonContainer>
			
					</Container>
				</SignInPage>
	);
};

export default SignUp;

