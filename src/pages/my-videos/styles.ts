import styled from 'styled-components';

export const MyVideosContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ProfileName = styled.span`

`;

export const CreateVideo = styled.button`
	width: 100px;
`;

export const ShowMyVideos = styled.div`
	
`;

export const Container = styled.div`
	width: 100%;
`;

export const VideoContainer = styled.div`
	width: 100%;
	max-width: 1600px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 20px;
	row-gap: 50px;
	padding-top: 15px;
`;
