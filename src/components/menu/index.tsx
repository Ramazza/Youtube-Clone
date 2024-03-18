import { Container, MenuItem,	Divider, OtherItems} from "./styles";
import { useContext } from 'react';
import { MenuContext } from '../../contexts/menuContext';
import { ButtonIcon } from '../header/styles';
import { IMAGES } from '../../constants/imageConstants';
import { useNavigate } from 'react-router-dom';

const items = [ 
	{ nome: 'Início', source: IMAGES.HOME, link: '/' },
	{ nome: 'Shorts',	source: IMAGES.VIDEO_FILES, link: '/shorts' },
	{ nome: 'Inscrições', source: IMAGES.LIBRARY, link: '/subscriptions' },
	{ nome: 'Youtube Music', source: IMAGES.PLAY, link: '/music' },
	{ nome: 'Biblioteca', source: IMAGES.FOLDERS, link: '/library' },
	{ nome: 'Histórico',	source: IMAGES.HISTORY, link: '/history' },
	{ nome: 'Em alta', source: IMAGES.FIRE, link: '/' },
	{ nome: 'Shopping', source: IMAGES.SHOPPING_BAG, link: '/' },
	{ nome: 'Música',	source: IMAGES.MUSIC, link: '/' },
	{ nome: 'Filmes', source: IMAGES.CLAPPER, link: '/'	},
	{ nome: 'Ao vivo', source: IMAGES.LIVE, link: '/' },
	{ nome: 'Jogos', source: IMAGES.CONTROLLER, link: '/'	},
	{ nome: 'Notícias', source: IMAGES.NEWS, link: '/' },
	{ nome: 'Esportes', source: IMAGES.CUP, link: '/' },
	{ nome: 'Aprender', source: IMAGES.BULB, link: '/' },
]

function Menu() {

	const {menu} = useContext(MenuContext);

	const navigate = useNavigate();

	return (
		<Container openMenu={menu}>
			{items.slice(0, 4).map((item, index) => (
					<MenuItem key={index} openMenu={menu} onClick={() => navigate(item.link)}>
						<ButtonIcon alt='' src={item.source} />
						<span>{item.nome}</span>
					</MenuItem>
			))}
			<OtherItems openMenu={menu}>
			<Divider></Divider>
				{items.slice(4, 6).map((item, index) => (
						<MenuItem key={index} openMenu={menu} onClick={() => navigate(item.link)}>
							<ButtonIcon alt='' src={item.source} />
							<span>{item.nome}</span>
						</MenuItem>
				))}
				<Divider></Divider>
				<span style={{textAlign: 'justify', width: '80%', paddingBottom: '5px'}}>Faça login para curtir vídeos, comentar e se inscrever.</span>
				<span style={{textAlign: 'justify', width: '70%', fontWeight: 'Bold'}}>Fazer login</span>
				<Divider></Divider>
				<span style={{textAlign: 'justify', width: '70%', paddingBottom: '5px', fontWeight: 'Bold'}}>Explorar</span>
				{items.slice(6).map((item, index) => (
						<MenuItem key={index} openMenu={menu} onClick={() => navigate(item.link)}>
							<ButtonIcon alt='' src={item.source} />
							<span>{item.nome}</span>
						</MenuItem>
				))}
			</OtherItems>
		</Container>
	);
};

export default Menu;