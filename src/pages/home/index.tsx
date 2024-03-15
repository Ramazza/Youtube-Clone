import VideoCategories from '../../components/videoCategories';
import VideoComponent from '../../components/videoComponent';
import { VideoContainer, Container } from './styles';
import { useContext } from 'react';
import { MenuContext } from '../../contexts/menuContext';

function Home() {

	const {menu} = useContext(MenuContext);


	return (
		<Container>
			<VideoCategories />
			<VideoContainer openMenu = {menu}>
				<VideoComponent />
				<VideoComponent />
				<VideoComponent />
				<VideoComponent />
				<VideoComponent />
				<VideoComponent />
				<VideoComponent />
				<VideoComponent />
				<VideoComponent />
				<VideoComponent />
				<VideoComponent />
				<VideoComponent />
				<VideoComponent />
			</VideoContainer>
		</Container>
	);
};

export default Home;