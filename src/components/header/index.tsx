import { 
	Container, 
	LogoContainer, 
	ButtonContainer, 
	ButtonIcon, 
	SearchContainer,
	SearchInputContainer, 
	SearchInput,
	SearchButton,
	HeaderButtons,
	UserContainer,
	LoginButton,
	DropdownContainer,
	LoginContainer,
	ProfileButton,
} from "./styles";
import HamburgerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/youtube-logo.png';
import Search from '../../assets/seacrh.png';
import MicrophoneIcon from '../../assets/microphone.png';
import VideoIcon from '../../assets/video.png';
import BellIcon from '../../assets/bell.png';
import User from '../../assets/user.png';
import { useContext, useState } from 'react';
import { MenuContext } from '../../contexts/menuContext';
import { UserContext } from '../../contexts/userContext';
import { useNavigate } from 'react-router-dom';

function Header() {

	const { login, logOut, user } = useContext(UserContext);
	const {menu, setMenu} = useContext(MenuContext);
	const [openProfile, setOpenProfile] = useState(true)
	const navigate = useNavigate()

	let userName: string = ''

	if(user.nome !== undefined){
		userName = user.nome.charAt(0).toUpperCase();
	}

	const handleLogOut = () => {
		logOut()
		setOpenProfile(true)
	}

	return (
		<Container>
			
			<LogoContainer>
					<ButtonContainer onClick={() => setMenu(!menu)} margin='0 10px 0 0'>
						<ButtonIcon alt="" src={HamburgerIcon} />
					</ButtonContainer>
					<img
						style={{ cursor: 'pointer', width: '100px' }}
						alt='Youtube Logo'
						src={Logo} 
						onClick={() => navigate('/')}
					/>
			</LogoContainer>

			<SearchContainer>
					<SearchInputContainer>
						<SearchInput placeholder="Pesquisar" />
					</SearchInputContainer>
					<SearchButton>
						<ButtonIcon alt='' src={Search} />
					</SearchButton>
					<ButtonContainer margin='0 0 0 10px'>
						<ButtonIcon alt='' src={MicrophoneIcon} />
					</ButtonContainer>
			</SearchContainer>

			<HeaderButtons>
					<ButtonContainer margin='0 0 0 10px'>
						<ButtonIcon alt='' src={VideoIcon} />
					</ButtonContainer>
					<ButtonContainer margin='0 0 0 10px'>
						<ButtonIcon alt='' src={BellIcon} />
					</ButtonContainer>

					{login? 
					<>
						<ButtonContainer style={{margin: '0 0 0 10px', border: '1px solid #d3d3d3'}} onClick={() => setOpenProfile(!openProfile)} >
							{userName}
						</ButtonContainer>
						<DropdownContainer dropdownOpen={openProfile}>
							<ProfileButton onClick={() => handleLogOut()}>Sair</ProfileButton>
						</DropdownContainer>
					</>
					:
						<UserContainer onClick={() => navigate('/login')}>
							<LoginContainer>
								<ButtonIcon alt='' src={User}/>
								<LoginButton>Fazer login</LoginButton>
							</LoginContainer>
						</UserContainer>
					
					}
			</HeaderButtons>
		</Container>
	);
};

export default Header;