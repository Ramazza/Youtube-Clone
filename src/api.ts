import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:4000',
	// baseURL: 'https://youtube-clone-api-2gs8.onrender.com',
	headers: {
	'Access-Control-Allow-Origin': '*',
	'Content-Type': 'application/json',
	}
});

export default api;