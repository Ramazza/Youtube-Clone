import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import { Container, Logo, Title, SubTitle, LoginContainer, NameInput, EmailInput, ButtonContainer, SignInButton, LoginButton, SignInPage, PasswordContainer, 
			PasswordInput, ShowPasswordContainer, ShowPasswordButton, ShowPassword, ErrorText } from './styles';
import Google from '../../assets/google.png';


function SignUp() {

	const { handleCreateAccount, nameError, emailError, passwordError, } = useContext(UserContext);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [showPassword, setShowpassword] = useState('password');

	const navigate = useNavigate();

	const showHidePassword = () => {
		if(showPassword === 'password'){
			setShowpassword('text');
		} else {
			setShowpassword('password');
		}
	}

	return (
				<SignInPage>
					<Container>

						<Logo src={Google} alt="Google Logo" />
						<Title>Criar a sua conta neste projeto</Title>
						<SubTitle>Prosseguir no YouTube</SubTitle>

						<LoginContainer>
							<NameInput type="text" placeholder='Nome e Sobrenome' value={name} onChange={(e) => setName(e.target.value)} autoFocus nameError={nameError} />
							<ErrorText passwordError={passwordError}>{nameError}</ErrorText>
							<EmailInput type="email" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} emailError={emailError}/>
							<ErrorText passwordError={passwordError}>{emailError}</ErrorText>
							<PasswordContainer>
								<PasswordInput type={showPassword} placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} passwordError={passwordError}/>
								<PasswordInput type={showPassword} placeholder='Confirmar' value={password2} onChange={(e) => setPassword2(e.target.value)} passwordError={passwordError}/>
							</PasswordContainer>
							<ErrorText passwordError={passwordError}>{passwordError}</ErrorText>
							<ShowPasswordContainer onClick={showHidePassword}>
								<ShowPasswordButton showPassword={showPassword}></ShowPasswordButton>
								<ShowPassword>Mostrar senha</ShowPassword>
							</ShowPasswordContainer>
						</LoginContainer>

						<ButtonContainer>
							<SignInButton onClick={() => navigate('/login')}>Fazer login</SignInButton>
							<LoginButton onClick={() => handleCreateAccount(name, email, password, password2)}>Próxima</LoginButton>
						</ButtonContainer>
			
					</Container>
				</SignInPage>
	);
};

export default SignUp;

