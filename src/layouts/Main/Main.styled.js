import styled, { css } from 'styled-components'

export const MainLayout = styled.div`
	position: relative;
	display: flex;
	min-height: 100vh;
`

export const Content = styled.div`
	position: relative;
	left: 62px;
	display: flex;
	width: calc(100% - 62px);
	padding: 25px 10px 10px;
	box-sizing: border-box;
	z-index: 10;
	transition: 0.3s;

	${({ isSidebarOpen }) =>
		isSidebarOpen &&
		css`
			width: calc(100% - 229px);
			left: 229px;
		`}
`

export const Main = styled.main``

export const Background = styled.div`
	position: absolute;
	right: 0;
	bottom: 0;
`
