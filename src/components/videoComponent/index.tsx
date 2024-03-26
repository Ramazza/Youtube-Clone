import { useContext } from 'react';
import {
	ChannelImage,
	Container, ImageBanner, TextCard, TextContainer, Title, TitleComponent,
} from './styles';
import { UserContext } from '../../contexts/userContext';

function VideoComponent({ video }: { video: { title: string; user_name: string; description: string; thumbnail: string; upload_time: string } }) {

	const { user } = useContext(UserContext);

	let userName: string = ''

	if(video.user_name !== undefined){
		userName = video.user_name.charAt(0).toUpperCase();
	}

	const min = 1;
	const max = 1000;
	const views = Math.floor(Math.random() * (max - min + 1)) + min;

	const SECOND = 1000;
	const MINUTE = SECOND * 60;
	const HOUR = MINUTE * 60;
	const DAY = HOUR * 24;

	const uploadTime: Date = new Date(video.upload_time);
	const currentTime: Date = new Date();
	const difference: number = currentTime.getTime() - uploadTime.getTime();

	let howLongAgo: string = '';

	if (difference >= DAY) {
		howLongAgo = `${Math.floor(difference / DAY)} dias`;
	} else if (difference >= HOUR) {
		howLongAgo = `${Math.floor(difference / HOUR)} horas`;
	} else if (difference >= MINUTE) {
		howLongAgo = `${Math.floor(difference / MINUTE)} minutos`;
	} else {
		howLongAgo = `${Math.floor(difference / SECOND)} segundos`;
	}

	return (
		<Container>
			<ImageBanner src={video.thumbnail} />
			<TitleComponent>
				<ChannelImage>{userName}</ChannelImage>
				<TextContainer>
					<Title>{video.title}</Title>
					<TextCard>{video.user_name}</TextCard>
					<TextCard>{views} vizualizações - há {howLongAgo}</TextCard>
				</TextContainer>
			</TitleComponent>
		</Container>
	);
}

export default VideoComponent;

