import { useContext } from 'react';
import { MyVideosContainer, ProfileName, CreateVideo, ShowMyVideos, Container, VideoContainer } from './styles';
import { UserContext } from '../../contexts/userContext';
import VideoComponent from '../../components/videoComponent';
import { useNavigate } from 'react-router-dom';
import { MenuContext } from '../../contexts/menuContext';

function MyVideos() {

	const { user, videos } = useContext(UserContext);
	const { menu } = useContext(MenuContext);

	const navigate = useNavigate();


	interface Video {
		title: string;
		user_name: string;
		description: string;
		thumbnail: string;
		upload_time: string;
	}

	let userName: string = ''

	if (user.nome !== undefined) {
		userName = user.nome.toUpperCase();
	}

	return (
		<MyVideosContainer>
			<ProfileName>{userName}</ProfileName>
			<CreateVideo onClick={() => navigate('/create-video')}>Adicionar Vídeo</CreateVideo>
			<ShowMyVideos>
				<Container>
					<VideoContainer openMenu={menu}>
						{videos.map((video: Video, index: number) => (
							<VideoComponent key={index} video={video} />
						))}
					</VideoContainer>
				</Container>
			</ShowMyVideos>
		</MyVideosContainer>

	);
};

export default MyVideos;