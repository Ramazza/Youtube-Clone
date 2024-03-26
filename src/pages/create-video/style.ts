import styled from 'styled-components';

export const OuterContainer = styled.div`
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0; 
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
	width: 50vw;
	height: 40vh;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 5px;
	border-radius: 15px;
	border: 1px solid #d3d3d3;
	background-color: #fdfdfd;
	padding: 20px 10px;
`;

export const Input = styled.input`
	width: 70%;
	height: 40px;
	border-radius: 5px;
	border: 1px solid #d3d3d3;
	padding-left: 10px;
	outline: 0;

	&::placeholder {
		font-size: 1.1em;
		font-weight: 500;
	}

	&:focus {
		border: 3px solid #1c74ec;
		outline: 0;
	}
`;

export const Button = styled.button`
	border: none;
	border-radius: 4px;
	background-color: #1c74ec;
	color: white;
	font-weight: 550;
	padding: 10px 20px;
	margin-top: 20px;
	cursor: pointer;

	&:hover {
		background-color: #2c74f4;
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
	}
`;