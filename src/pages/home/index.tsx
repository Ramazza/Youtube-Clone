import VideoCategories from '../../components/videoCategories';
import VideoComponent from '../../components/videoComponent';
import { VideoContainer, Container } from './styles';
import { useContext } from 'react';
import { MenuContext } from '../../contexts/menuContext';

function Home() {

	const {menu} = useContext(MenuContext);

	const videos = [
		{
		image: '', 
		title: 'How Much Do We Know About Sports?',
		channelName: 'Smosh Pit',
		views: '128 mil',
		time: '4 horas'
	},
		{
		image: '', 
		title: 'How Much Do We Know About Sports?',
		channelName: 'Smosh Pit',
		views: '128 mil',
		time: '4 horas'
	},
		{
		image: '', 
		title: 'How Much Do We Know About Sports?',
		channelName: 'Smosh Pit',
		views: '128 mil',
		time: '4 horas'
	},
		{
		image: '', 
		title: 'How Much Do We Know About Sports?',
		channelName: 'Smosh Pit',
		views: '128 mil',
		time: '4 horas'
	},
		{
		image: '', 
		title: 'How Much Do We Know About Sports?',
		channelName: 'Smosh Pit',
		views: '128 mil',
		time: '4 horas'
	},
]

	return (
		<Container>
			<VideoCategories />
			<VideoContainer openMenu = {menu}>
					{videos.map((video) => (
						<VideoComponent video={video}/>
					))}			
			</VideoContainer>
		</Container>
	);
};

export default Home;