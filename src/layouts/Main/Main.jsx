import { useState } from 'react'
import Image from 'next/image'

import { Header, Sidebar } from 'components'

import mainBackgroundSrc from 'public/img/main-background.png'

import * as S from './Main.styled'

export const MainLayout = ({ children }) => {
	const [isSidebarOpen, setSidebarOpen] = useState(false)

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen)
	}

	return (
		<S.MainLayout>
			<Sidebar isOpen={isSidebarOpen} onSidebarOpen={toggleSidebar} />

			<S.Content isSidebarOpen={isSidebarOpen}>
				<Header />

				<S.Main>{children}</S.Main>
			</S.Content>

			<S.Background>
				<Image src={mainBackgroundSrc} alt="фон" priority quality={100} />
			</S.Background>
		</S.MainLayout>
	)
}
