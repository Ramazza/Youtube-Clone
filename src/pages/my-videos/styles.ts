import styled from 'styled-components';

export const MyVideosContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 30px;
`;

export const ProfileName = styled.span`
	font-size: 1.5em;
	font-weight: 500;
	padding: 10px 0px;
`;

export const CreateVideo = styled.button`
		width: 150px;
		border: none;
		border-radius: 4px;
		background-color: #1c74ec;
		color: white;
		font-weight: 550;
		padding: 15px 20px;
		margin-bottom: 10px;
		cursor: pointer;

	&:hover {
		background-color: #2c74f4;
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
	}
`;

export const ShowMyVideos = styled.div`
	
`;

export const Container = styled.div`
	width: 100%;
`;

export const VideoContainer = styled.div<{openMenu: boolean}>`
	width: 100%;
	max-width: 1600px;
	display: grid;
	grid-template-columns: ${({ openMenu }) => openMenu? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
	column-gap: 20px;
	row-gap: 50px;
	padding-top: 15px;
`;
