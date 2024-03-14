import { Container, MenuItem,	Divider, OtherItems} from "./styles";
import { useContext } from 'react';
import { MenuContext } from '../../contexts/menuContext';
import { ButtonIcon } from '../header/styles';
import { IMAGES } from '../../constants/imageConstants';

const items = [ 
	{ nome: 'Início', source: IMAGES.HOME	},
	{ nome: 'Shorts',	source: IMAGES.VIDEO_FILES },
	{ nome: 'Inscrições', source: IMAGES.LIBRARY },
	{ nome: 'Youtube Music', source: IMAGES.PLAY },
	{ nome: 'Biblioteca', source: IMAGES.FOLDERS },
	{ nome: 'Histórico',	source: IMAGES.HISTORY },
	{ nome: 'Em alta', source: IMAGES.FIRE },
	{ nome: 'Shopping', source: IMAGES.SHOPPING_BAG },
	{ nome: 'Música',	source: IMAGES.MUSIC },
	{ nome: 'Filmes', source: IMAGES.CLAPPER	},
	{ nome: 'Ao vivo', source: IMAGES.LIVE },
	{ nome: 'Jogos', source: IMAGES.CONTROLLER	},
	{ nome: 'Notícias', source: IMAGES.NEWS },
	{ nome: 'Esportes', source: IMAGES.CUP },
	{ nome: 'Aprender', source: IMAGES.BULB },
]

function Menu() {

	const {menu} = useContext(MenuContext);

	return (
		<Container openMenu={menu}>
			{items.slice(0, 4).map((item, index) => (
					<MenuItem key={index} openMenu={menu}>
						<ButtonIcon alt='' src={item.source} />
						<span>{item.nome}</span>
					</MenuItem>
			))}
			<OtherItems openMenu={menu}>
			<Divider></Divider>
				{items.slice(4, 6).map((item, index) => (
						<MenuItem key={index} openMenu={menu}>
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
						<MenuItem key={index} openMenu={menu}>
							<ButtonIcon alt='' src={item.source} />
							<span>{item.nome}</span>
						</MenuItem>
				))}
			</OtherItems>
		</Container>
	);
};

export default Menu;