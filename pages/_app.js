import { MainLayout } from 'layouts'

import { GlobalStyles } from 'styled/globalStyles'
import 'public/fonts/fonts.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles />

			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</>
	)
}

export default MyApp
