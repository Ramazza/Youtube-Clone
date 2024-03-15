import { Container, Categorie } from './styles';

const items = [
	{nome: 'Tudo'},
	{nome: 'Música'},
	{nome: 'Ao Vivo'},
	{nome: 'Jogos'},
	{nome: 'Hino'},
	{nome: 'Notícias'},
	{nome: 'Animação'},
	{nome: 'Comédia'},
	{nome: 'Dublagens'},
	{nome: 'Podcast'},
	{nome: 'Suspense'},
	{nome: 'Destinos 	turísticos'},
	{nome: 'Mixes'},
	{nome: 'Mixes'},
	{nome: 'Mixes'},
	{nome: 'Mixes'},
	{nome: 'Mixes'},
	{nome: 'Mixes'},
	{nome: 'Mixes'},
]

function VideoCategories() {

	return (
		<Container>
			{items.map((item, index) => (
				<Categorie key={index}>
					<span>{item.nome}</span>
				</Categorie>
			))}
		</Container>
	);
};

export default VideoCategories;