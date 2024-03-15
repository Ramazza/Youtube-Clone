import {
	ChannelImage,
	Container, ImageBanner, TextCard, TextContainer, Title, TitleComponent,
} from './styles';

function VideoComponent() {

	return (
		<Container>
			<ImageBanner src='https://i.ytimg.com/vi/ISpSkPL1eTM/hq720.jpg' />
			<TitleComponent>
				<ChannelImage>
					SP
				</ChannelImage>
				<TextContainer>
					<Title>How Much Do We Know About Sports?</Title>
					<TextCard>Smosh Pit</TextCard>
					<TextCard>128 mil vizualizações - há 4 horas</TextCard>
				</TextContainer>
			</TitleComponent>
		</Container>
	);
};

export default VideoComponent;

