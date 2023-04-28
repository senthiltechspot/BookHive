import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

import useWindowWidth from '../../hooks/useWindowWidth'
import SnackbarContext from '../../store/snackbarContext'
import classes from './snackbar.module.css'
import CloseIcon from '../../assets/icons/CloseIcon'
import CheckCircleIcon from '../../assets/icons/CheckCircleIcon'
import WarningIcon from '../../assets/icons/WarningIcon'
import FeedbackIcon from '../../assets/icons/FeedbackIcon'
import InValidIcon from '../../assets/icons/InValidIcon'

function SnackBar(props) {
	const snackbarCtx = useContext(SnackbarContext)
	const message = snackbarCtx.message

	const windowWidth = useWindowWidth()
	const router = useRouter()

	const badges = {
		success: {
			color: 'bg-green-400 bg-opacity-90 text-green-700 border-green-700 ring-green-600/20',
			icon: <CheckCircleIcon dimensions={'w-6s h-6'} />,
		},
		info: {
			color: 'bg-blue-400 bg-opacity-90 text-blue-700 border-blue-700 ring-blue-700/10',
			icon: <FeedbackIcon dimensions={'w-6 h-6'} />,
		},
		warning: {
			color: 'bg-yellow-400 bg-opacity-90 text-yellow-800 border-yellow-800 ring-yellow-600/20',
			icon: <WarningIcon dimensions={'w-6 h-6'} />,
		},
		fail: {
			color: 'bg-red-400 bg-opacity-90 text-red-700 border-red-700 ring-red-600/10',
			icon: <CloseIcon dimensions={'w-6 h-6'} />,
		},
		invalid: {
			color: 'bg-red-400 bg-opacity-90 text-red-700 border-red-700 ring-red-600/10',
			icon: <InValidIcon dimensions={'w-6 h-6'} />,
		},
	}

	useEffect(() => {
		if (message && message.status !== 'pending') {
			const timer = setTimeout(() => {
				snackbarCtx.removeMessage()
			}, 3000)

			return () => {
				clearTimeout(timer)
			}
		}
	}, [message, router.asPath])

	// box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); bg-[#323232]
	return message?.title ? (
		<div
			className={
				'fixed overflow-hidden m-2 xl:m-3 w-auto z-20 ' +
				(windowWidth < 1280
					? props.navbarRef.current
						? 'left-0 bottom-28'
						: 'left-0 bottom-0'
					: 'left-[13.5vw] bottom-0')
			}>
			<div
				className={
					'inline-flex items-center justify-between w-full rounded-md bg-[#192139] border-l-4 box-border ring-1 ring-inset select-none ' +
					(badges[message.status] ? badges[message.status].color : '')
				}
				vshow='show'
				transition={classes.uiSnackbarToggle}>
				<div className='flex gap-2 p-2 xl:p-2.5'>
					{badges[message.status] ? badges[message.status].icon : ''}
					<span className='text-lg font-medium leading-relaxed'>{message.title}</span>
				</div>
				<div
					className='mx-1 p-[0.1rem] box-border rounded-full cursor-pointer'
					onClick={() => snackbarCtx.removeMessage()}>
					{message.undo && 'Undo'}
				</div>
			</div>
		</div>
	) : (
		<></>
	)
}

export default SnackBar
