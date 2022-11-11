import styled, { css } from 'styled-components'

export const MenuListItem = styled.li`
	padding: 0 10px;
	transition: 0.3s;

	&:not(:last-child) {
		margin-bottom: 5px;
	}

	a {
		display: flex;
		align-items: center;
	}

	&:hover {
		background: rgba(55, 63, 72, 0.5);
	}
`

export const MenuItemLabel = styled.span`
	margin-left: 5px;
	font-size: 14px;
	white-space: nowrap;
	color: transparent;
	transition: 0.3s;
`

export const MenuList = styled.ul`
	width: 100%;
	padding: 10px 0;

	& > ${MenuListItem}:first-child {
		${MenuItemLabel} {
			font-family: 'Lato-Heavy';
			font-weight: 900;
			font-size: 16px;
		}
	}
`

export const MenuItemIcon = styled.span`
	padding: 5px 10px;

	/* &:hover {
		background: #373f48;
		border-radius: 16px;
	} */
`

const openedSidebarStyles = css`
	width: 229px;
	background: rgba(31, 34, 37, 0.8);
	backdrop-filter: blur(10px);

	${MenuItemLabel} {
		color: #fff;
	}
`

export const SubMenu = styled.div`
	margin: 0 10px;
	transition: 0.3s;

	&:not(:last-child) {
		margin-bottom: 5px;
	}

	${({ expanded }) =>
		expanded &&
		css`
			background: rgba(66, 72, 79, 0.3);
			border-radius: 5px;
		`}
`

export const Sidebar = styled.aside`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-shrink: 0;
	width: 62px;
	min-height: 100vh;
	overflow: hidden;
	transition: 0.3s ease-out;
	z-index: 100;

	&:hover {
		width: 229px;
		background: rgba(31, 34, 37, 0.8);
		backdrop-filter: blur(10px);

		${MenuItemLabel} {
			color: #fff;
		}
	}

	${({ isOpen }) => isOpen && openedSidebarStyles}
`

export const SubMenuList = styled.ul`
	${MenuListItem} {
		padding: 0;

		&:last-child {
			border-bottom-left-radius: 5px;
			border-bottom-right-radius: 5px;
		}
	}
`

export const ButtonExpand = styled.button`
	display: flex;
	align-items: center;
	width: 100%;
	margin-bottom: 5px;
	border-radius: 5px;
	transition: 0.3s;

	&:hover {
		background: rgba(66, 72, 79, 0.5);
	}

	span {
		display: flex;
		align-items: center;
	}

	& > svg {
		margin-left: 5px;
	}
`
