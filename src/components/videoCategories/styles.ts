import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	gap: 5px;
	padding: 10px 5px 10px 5px;
	overflow-x: scroll;

`;

export const Categorie = styled.div`
	min-height: '45px';
	border-radius: 10px;
	cursor: pointer;
	padding: 8px 15px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f2f2f2;

	span {
		font-weight:  500;
		font-size: 16px;
		white-space: nowrap;
	}

	&:hover {
		background-color: lightgray;
	}
`;

