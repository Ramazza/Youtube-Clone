import { useContext } from 'react';
import { MyVideosContainer, ProfileName, CreateVideo, ShowMyVideos, Container, VideoContainer } from './styles';
import { UserContext } from '../../contexts/userContext';
import VideoComponent from '../../components/videoComponent';
import { useNavigate } from 'react-router-dom';

function MyVideos() {



	// Quando entrar na tela de meus videos, rodar a função getVideos com o user_id
	// Quando criar um video novo, deixar num useEffect
	// 

	// Quando entra na pagina o getVideos não tem o user_id


	const { user, videos } = useContext(UserContext);

	const navigate = useNavigate();


	interface Video {
		title: string;
		description: string;
		thumbnail: string;
		upload_time: string;
	}

	let userName: string = ''

	if (user.nome !== undefined) {
		// userName = user.nome.charAt(0).toUpperCase();
		userName = user.nome.toUpperCase();
	}

	return (
		<MyVideosContainer>
			<ProfileName>{userName}</ProfileName>
			<CreateVideo onClick={() => navigate('/create-video')}>Adicionar Vídeo</CreateVideo>
			<ShowMyVideos>
				<Container>
					<VideoContainer>
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