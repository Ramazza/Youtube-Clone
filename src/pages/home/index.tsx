import VideoCategories from '../../components/videoCategories';
import VideoComponent from '../../components/videoComponent';
import { VideoContainer, Container } from './styles';
import { useContext, useEffect } from 'react';
import { MenuContext } from '../../contexts/menuContext';
import { UserContext } from '../../contexts/userContext';

function Home() {

	const { menu } = useContext(MenuContext);
	const { getAllVideos, allVideos } = useContext(UserContext);

	interface Video {
		title: string;
		user_name: string;
		description: string;
		thumbnail: string;
		upload_time: string;
	}

	console.log(allVideos)

// 	const videos = [
// 		{
// 		image: '', 
// 		title: 'How Much Do We Know About Sports?',
// 		channelName: 'Smosh Pit',
// 		views: '128 mil',
// 		time: '4 horas'
// 	},
// 		{
// 		image: '', 
// 		title: 'How Much Do We Know About Sports?',
// 		channelName: 'Smosh Pit',
// 		views: '128 mil',
// 		time: '4 horas'
// 	},
// 		{
// 		image: '', 
// 		title: 'How Much Do We Know About Sports?',
// 		channelName: 'Smosh Pit',
// 		views: '128 mil',
// 		time: '4 horas'
// 	},
// 		{
// 		image: '', 
// 		title: 'How Much Do We Know About Sports?',
// 		channelName: 'Smosh Pit',
// 		views: '128 mil',
// 		time: '4 horas'
// 	},
// 		{
// 		image: '', 
// 		title: 'How Much Do We Know About Sports?',
// 		channelName: 'Smosh Pit',
// 		views: '128 mil',
// 		time: '4 horas'
// 	},
// ]

	useEffect(() => {
		getAllVideos()
	}, [])

	return (
		<Container>
			<VideoCategories />
			<VideoContainer openMenu = {menu} >
				{allVideos.map((video: Video, index: number) => (
					<VideoComponent key={index} video={video} />
				))}			
			</VideoContainer>
		</Container>
	);
};

export default Home;