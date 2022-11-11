import styled from 'styled-components'

export const SearchField = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 40px;
	padding-right: 15px;
	background: #42484f;
	box-shadow: 1px 2px 7px rgba(99, 99, 99, 0.2);
	border-radius: 5px;
`

export const SearchFieldInput = styled.input`
	width: 100%;
	padding: 0;
	border: none;
	padding: 12px 0 12px 15px;
	font-family: 'Ubuntu';
	font-size: 14px;
	color: #fff;
	background: #42484f;
	border-radius: 5px;

	&:focus {
		outline: none;
	}

	&::placeholder {
		opacity: 1;
		color: #b4b4b4;
	}
`

export const ButtonIcon = styled.button`
	margin-left: 10px;
`
