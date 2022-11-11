import { useState } from 'react'
import Link from 'next/link'

import {
	HamburgerIcon,
	DocumentCheckmarkIcon,
	TeamworkIcon,
	MessagesIcon,
	CalendarIcon,
	DocumentIcon,
	CloudIcon,
	MailIcon,
	GroupIcon,
	ListFilterIcon,
	TrackChangesIcon,
	ShoppingCartIcon,
	ContactsIcon,
	DroidIcon,
	WidgetsIcon,
	DropdownCircleIcon,
	ArrowDownIcon
} from 'svg/icons'

import * as S from './Sidebar.styled'

export const Sidebar = ({ isOpen, onSidebarOpen }) => {
	const [activeSubMenuName, setActiveSubMenuName] = useState('')

	const menu = [
		{ label: isOpen ? 'Свернуть меню' : 'Развернуть меню', icon: <HamburgerIcon />, href: '/' },
		{ label: 'Финансы', icon: <DocumentCheckmarkIcon />, href: '/' },
		{
			label: 'Совместная работа',
			icon: <TeamworkIcon />,
			subItems: [
				{ label: 'Чат и звонки', icon: <MessagesIcon />, href: '/' },
				{ label: 'Календарь', icon: <CalendarIcon />, href: '/' },
				{ label: 'Документы', icon: <DocumentIcon />, href: '/' },
				{ label: 'Диск', icon: <CloudIcon />, href: '/' },
				{ label: 'Почта', icon: <MailIcon />, href: '/' },
				{ label: 'Группы', icon: <GroupIcon />, href: '/' }
			]
		},
		{ label: 'CRM', icon: <ListFilterIcon />, href: '/' },
		{ label: 'Маркетинг', icon: <TrackChangesIcon />, href: '/' },
		{ label: 'Магазины', icon: <ShoppingCartIcon />, href: '/' },
		{ label: 'Компания', icon: <ContactsIcon />, href: '/' },
		{ label: 'Автоматизация', icon: <DroidIcon />, href: '/' },
		{
			label: 'Приложения',
			icon: <WidgetsIcon />,
			subItems: [
				{ label: 'Приложение 1', icon: <WidgetsIcon />, href: '/' },
				{ label: 'Приложение 2', icon: <WidgetsIcon />, href: '/' },
				{ label: 'Приложение 3', icon: <WidgetsIcon />, href: '/' }
			]
		},
		{ label: 'Ещё', icon: <DropdownCircleIcon />, href: '/' }
	]

	const toggleSubMenu = (name, activeName) => {
		setActiveSubMenuName(name === activeName ? '' : name)
	}

	const renderSubMenu = (item, activeSubName) => {
		const { label, icon, subItems } = item

		const isExpanded = label === activeSubName

		return (
			<S.SubMenu key={label} expanded={isExpanded}>
				<S.ButtonExpand onClick={() => toggleSubMenu(label, activeSubName)}>
					<span>
						<S.MenuItemIcon>{icon}</S.MenuItemIcon>
						<S.MenuItemLabel>{label}</S.MenuItemLabel>
					</span>

					<ArrowDownIcon />
				</S.ButtonExpand>

				{isExpanded ? (
					<S.SubMenuList>
						{subItems.map(({ label, icon, href }) => {
							return (
								<S.MenuListItem key={label}>
									<Link href={href}>
										<S.MenuItemIcon>{icon}</S.MenuItemIcon>
										<S.MenuItemLabel>{label}</S.MenuItemLabel>
									</Link>
								</S.MenuListItem>
							)
						})}
					</S.SubMenuList>
				) : null}
			</S.SubMenu>
		)
	}

	const menuItems = menu.map(({ label, icon, href, subItems }, idx) => {
		return subItems ? (
			renderSubMenu({ label, icon, subItems }, activeSubMenuName)
		) : (
			<S.MenuListItem key={label} onClick={idx === 0 ? onSidebarOpen : null}>
				<Link href={href}>
					<S.MenuItemIcon>{icon}</S.MenuItemIcon>
					<S.MenuItemLabel>{label}</S.MenuItemLabel>
				</Link>
			</S.MenuListItem>
		)
	})

	return (
		<S.Sidebar isOpen={isOpen}>
			<S.MenuList>{menuItems}</S.MenuList>
		</S.Sidebar>
	)
}
