import { 
	Container, MenuItem, 
} from "./styles";
import { useContext } from 'react';
import { MenuContext } from '../../contexts/menuContext';

const items = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

type openMenuType = {
	openMenu: boolean;
}


function Menu({openMenu}: openMenuType) {

	const {menu} = useContext(MenuContext);

	return (
		<Container openMenu={menu}>
			{items.map(() => (
					<MenuItem>
						Ramazza
					</MenuItem>
			))}
		</Container>
	);
};

export default Menu;