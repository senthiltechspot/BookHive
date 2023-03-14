import { useState, useEffect, useRef, useCallback } from 'react'
// import { useRouter } from 'next/router'
import NavigateBackButton from '../ui/NavigateBackButton'
import useWindowDimensions from '../../hooks/useWindowDimensions'

export default function TopNavModal({ rightIcon, lastIcon, pageTitle, pageRef, coverRef }) {
	const [opacity, setOpacity] = useState(0)
	const [navOpacity, setNavOpacity] = useState(0)
	const [bgColor, setBgColor] = useState('')
	const titleRef = useRef()
	const navRef = useRef()

	const windowWidth = useWindowDimensions()

	useEffect(() => {
		navRef.current.style.backgroundOpacity = opacity
		if (opacity > 0.75) titleRef.current.style.opacity = opacity
		else titleRef.current.style.opacity = 0
		if (coverRef?.current) coverRef.current.style.opacity = 1 - opacity
	}, [opacity])

	const handleScroll = () => {
		const scrollYPos = -1 * coverRef.current.getBoundingClientRect().top
		const coverHeight = coverRef.current.offsetHeight
		const scrollPos = Math.min(scrollYPos, coverHeight)
		const scrollOpacity = Math.round((scrollPos / coverHeight + Number.EPSILON) * 100) / 100 //round to 2 decimal places
		setOpacity(scrollOpacity)
		setNavOpacity(Math.round(Math.round((scrollOpacity + Number.EPSILON) * 100) / 10) * 10)
	}

	let timerId
	const setDebouncedScroll = () => {
		if (timerId) clearTimeout(timerId)

		timerId = setTimeout(() => {
			handleScroll()
		}, 15)
	}

	// const debouncedScroll = useCallback(_.debounce(handleScroll, 500),[]);

	useEffect(() => {
		if (pageRef?.current) {
			pageRef.current.addEventListener('wheel', setDebouncedScroll)

			if (coverRef.current.className.includes('from-'))
				setBgColor(coverRef.current.className.split('from-')[1].split(' ')[0])

			return () => {
				pageRef.current?.removeEventListener('scroll', setDebouncedScroll)
			}
		}
	}, [])

	return (
		<div
			className={
				`fixed top-0 flex flex-grow xl:hidden w-full items-center justify-between gap-2 md:gap-3 px-1 sm:px-2 z-20 bg-opacity-${navOpacity} ` +
				(bgColor ? `bg-${bgColor}` : 'bg-[#030b17]')
			}
			ref={navRef}>
			<NavigateBackButton />
			<div ref={titleRef} className={`opacity-0 truncate font-medium text-lg text-center`}>
				{pageTitle}
			</div>
			<div className='flex gap-1'>
				<div className='m-2'>{rightIcon}</div>
				<div className='m-2'>{lastIcon}</div>
			</div>
		</div>
	)
}