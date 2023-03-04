import { useState, useEffect, useRef } from 'react'

import { SnackbarContextProvider } from '../../store/snackbarContext'
import { SearchToggleContextProvider } from '../../store/searchToggleContext'
import Header from './Header'
import Sidebar from './Sidebar'
import PageContainer from './PageContainer'
// import Navbar from './Navbar'
// import SnackBar from '../notification/SnackBar'

function Container(props) {
	const [windowWidth, setWindowWidth] = useState(null)

	const headerRef = useRef()
	// const navbarRef = useRef()

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setWindowWidth(window.innerWidth)
		}
	}, [])

	return (
		<SnackbarContextProvider>
			<div className='overflow-hidden'>
				<div className='flex h-screen relative'>
					{windowWidth > 1024 && <Sidebar />}
					<SearchToggleContextProvider>
						<main className='flex-grow bg-[#121212] overflow-y-scroll select-none h-full'>
							{windowWidth > 1024 && <Header headerRef={headerRef} />}
							<PageContainer page={props.children} headerRef={headerRef} />
						</main>
					</SearchToggleContextProvider>
					{/* <SnackBar navbarRef={navbarRef} />
					{windowWidth < 1024 && <Navbar navbarRef={navbarRef} />} */}
				</div>
			</div>
		</SnackbarContextProvider>
	)
}

export default Container
