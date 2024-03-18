import {
	ChannelImage,
	Container, ImageBanner, TextCard, TextContainer, Title, TitleComponent,
} from './styles';

function VideoComponent({ video }: any) {

	return (
		<Container>
			<ImageBanner src='https://i.ytimg.com/vi/ISpSkPL1eTM/hq720.jpg' />
			<TitleComponent>
				<ChannelImage>
					SP
				</ChannelImage>
				<TextContainer>
					<Title>{video.title}</Title>
					<TextCard>{video.channelName}</TextCard>
					<TextCard>{video.views} vizualizações - há {video.time}</TextCard>
				</TextContainer>
			</TitleComponent>
		</Container>
	);
};

export default VideoComponent;

