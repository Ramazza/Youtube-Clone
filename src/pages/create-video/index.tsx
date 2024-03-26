import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/userContext';
import { useNavigate } from 'react-router-dom';
import { OuterContainer, Container, Input, Button } from './style';

function CreateVideo() {

	const { user, createVideo, getVideos } = useContext(UserContext);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [thumbnail, setThumbnail] = useState('');
	const navigate = useNavigate();

	const handleCreateVideo = () => {
		createVideo(title, description, user.id, user.nome, thumbnail);
		getVideos(user.id);
		navigate('/my-videos');
	}

	return (
		<OuterContainer>
			<Container>
				<Input placeholder='Título do vídeo' value={title} onChange={(e) => setTitle(e.target.value)}/>
				<Input placeholder='Descrição do vídeo' value={description} onChange={(e) => setDescription(e.target.value)}/>
				<Input placeholder='URL da thumbnail ex: https://images.server.com/120/1209131.jpg' value={thumbnail} onChange={(e) => setThumbnail(e.target.value)}/>
				<Button onClick={() => handleCreateVideo()}>Adicionar vídeo</Button>
			</Container>
		</OuterContainer>
	);
};

export default CreateVideo;