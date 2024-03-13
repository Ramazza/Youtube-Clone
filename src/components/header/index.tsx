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
} from "./styles";
import HamburgerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/youtube-logo.png';
import Search from '../../assets/seacrh.png';
import MicrophoneIcon from '../../assets/microphone.png';
import VideoIcon from '../../assets/video.png';
import BellIcon from '../../assets/bell.png';
import { useContext } from 'react';
import { MenuContext } from '../../contexts/menuContext';

function Header() {

	const {menu, setMenu} = useContext(MenuContext);

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
					<ButtonContainer>
						<ButtonIcon alt='' src={VideoIcon} />
					</ButtonContainer>
					<ButtonContainer>
						<ButtonIcon alt='' src={BellIcon} />
					</ButtonContainer>
					<ButtonContainer>
						R
					</ButtonContainer>
			</HeaderButtons>
		</Container>
	);
};

export default Header;