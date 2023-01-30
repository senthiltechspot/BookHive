import React from 'react'

export default function CloseIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='w-6 h-6 text-black group-hover:text-gray-600'
			viewBox='0 0 24 24'
			stroke-width='1.5'
			stroke='currentColor'
			fill='none'
			stroke-linecap='round'
			stroke-linejoin='round'>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<line x1='18' y1='6' x2='6' y2='18' />
			<line x1='6' y1='6' x2='18' y2='18' />
		</svg>
	)
}
