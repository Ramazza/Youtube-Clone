import styled from 'styled-components';

export const SignInPage = styled.div`
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: white;
`;


export const Container = styled.div`
	width: 27vw;
	height: 60vh;
	margin: 0 auto;
	margin-top: 15vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 15px;
	border: 1px solid #d3d3d3;
	background-color: #fdfdfd;
	padding: 20px 10px;
`;

export const Logo = styled.img`
	width: 100px;
`;

export const Title = styled.span`
	font-size: 1.4em;
	font-weight: 400;
`;

export const SubTitle = styled.span`
	font-size: 1em;
	font-weight: 450;
	padding: 10px 0 20px 0;
`;

export const LoginContainer = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	gap: 7px;
	padding-bottom: 20px;
`;

export const LoginInput = styled.input`
	height: 30px;
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

export const ButtonContainer = styled.div`
	width: 70%;
	display: flex;
	justify-content: space-between;

`;
export const SignInButton = styled.button`
	border: none;
	border-radius: 7px;
	background-color: #fdfdfd;
	color: #1c74ec;
	font-weight: 550;
	padding: 10px 10px;
	cursor: pointer;

	&:hover {
		background-color: #f3f3f3;
	}
`;

export const LoginButton = styled.button`
		border: none;
		border-radius: 4px;
		background-color: #1c74ec;
		color: white;
		font-weight: 550;
		padding: 10px 20px;
		cursor: pointer;

	&:hover {
		background-color: #2c74f4;
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
	}
`;

export const PasswordContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 10px;
`;

export const PasswordInput = styled.input`
	width: 45%;
	height: 30px;
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
