import { ReactNode, createContext, useState } from 'react';

const initialValue = {
	menu: true,
	setMenu: () => {}
}

type menuContexType = {
	menu: boolean;
	setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

type menuStoretype = {
	children : ReactNode;
}

export const MenuContext = createContext <menuContexType>(initialValue);

export const MenuStore = ({ children }: menuStoretype) => {

	const [menu, setMenu] = useState(initialValue.menu);

	return (
		<MenuContext.Provider value={{menu, setMenu}}>
			{ children }
		</MenuContext.Provider>
	);
};
