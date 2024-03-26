import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/userContext';
import { useNavigate } from 'react-router-dom';

function CreateVideo() {

	const { user, createVideo, getVideos } = useContext(UserContext);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [thumbnail, setThumbnail] = useState('');
	const navigate = useNavigate();


	const handleCreateVideo = () => {
		createVideo(title, description, user.id, thumbnail)
		getVideos(user.id)
		navigate('/my-videos')
	}

	return (
		<div style={{display: 'flex', flexDirection: 'column'}}>
			<input type="text" placeholder='Título' value={title} onChange={(e) => setTitle(e.target.value)}/>
			<input type="text" placeholder='Descrição' value={description} onChange={(e) => setDescription(e.target.value)}/>
			<input type="text" placeholder='Thumbnail' value={thumbnail} onChange={(e) => setThumbnail(e.target.value)}/>
			<button onClick={() => handleCreateVideo()}>criar video</button>
		</div>
	);
};

export default CreateVideo;