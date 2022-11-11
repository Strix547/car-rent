import styled from 'styled-components'

import { SearchField } from 'ui/SearchField/SearchField.styled'

export const Header = styled.header`
	width: 100%;
	transition: 0.3s;
`

export const Top = styled.div`
	display: flex;
	align-items: center;

	${SearchField} {
		max-width: 600px;
	}
`

export const Clock = styled.div`
	display: flex;
	align-items: center;
	margin-left: 245px;

	span {
		font-size: 45px;
		margin-left: 15px;
	}
`

export const User = styled.div`
	display: flex;
	align-items: center;
	margin-left: auto;

	span {
		margin: 0 10px;
	}
`

export const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 15px;
`

export const BottomLeft = styled.div`
	display: flex;
`

export const Divider = styled.div`
	width: 2px;
	height: 31px;
	background: #ffffff;
	opacity: 0.2;
	border-radius: 5px;
	margin: 0 20px;
`

export const JobList = styled.div`
	display: flex;
	grid-gap: 10px;
`

export const AddJob = styled.div`
	display: flex;
	align-items: center;
	border-radius: 5px;
	padding-right: 2px;
	background: linear-gradient(54.93deg, #408104 0%, #337801 100%);

	span {
		display: flex;
		align-items: center;
		height: 27px;
		padding: 0 10px;
		background: #000;

		&:last-child {
			border-top-right-radius: 5px;
			border-bottom-right-radius: 5px;
		}

		svg {
			margin-left: 5px;
		}
	}
`

export const AddJobIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 37px;
	height: 31px;
`

export const Tabs = styled.ul`
	display: flex;
	background: linear-gradient(268.87deg, #88b114 -10.28%, #558f09 27.63%, #2c7400 73.22%, #408104 100%);
	border-radius: 5px;
`

export const TabItem = styled.li`
	padding: 7px 10px;

	button {
		color: #fff;
	}
`
