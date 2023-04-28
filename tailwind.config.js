/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			ms: '360px',
			xs: '480px',
			...defaultTheme.screens,
		},
		fontFamily: {
			merriweather: ['Merriweather', 'sans-serif'],
			poppins: ['Poppins', 'sans-serif'],
			roboto: ['Roboto', 'sans-serif'],
			sans: defaultTheme.fontFamily.sans,
			serif: defaultTheme.fontFamily.serif,
		},
	},
	plugins: [],
	safelist: [
		'from-[#101621]',
		'from-red-700',
		'from-orange-700',
		'from-amber-700',
		'from-yellow-700',
		'from-lime-700',
		'from-green-700',
		'from-emerald-700',
		'from-teal-700',
		'from-cyan-700',
		'from-sky-700',
		'from-blue-700',
		'from-indigo-700',
		'from-violet-700',
		'from-purple-700',
		'from-fuchsia-700',
		'from-pink-700',
		'from-rose-700',
		'from-stone-700',
		'from-zinc-700',
		'from-slate-700',
		'bg-red-800',
		'bg-orange-800',
		'bg-amber-800',
		'bg-yellow-800',
		'bg-lime-800',
		'bg-green-800',
		'bg-emerald-800',
		'bg-teal-800',
		'bg-cyan-800',
		'bg-sky-800',
		'bg-blue-800',
		'bg-indigo-800',
		'bg-violet-800',
		'bg-purple-800',
		'bg-fuchsia-800',
		'bg-pink-800',
		'bg-rose-800',
		'bg-stone-800',
		'bg-zinc-800',
		'bg-slate-800',
		'bg-gradient-to-br from-red-800 to bg-red-400',
		'bg-gradient-to-br from-orange-800 to bg-orange-400',
		'bg-gradient-to-br from-amber-800 to bg-amber-400',
		'bg-gradient-to-br from-yellow-800 to bg-yellow-400',
		'bg-gradient-to-br from-lime-800 to bg-lime-400',
		'bg-gradient-to-br from-green-800 to bg-green-400',
		'bg-gradient-to-br from-emerald-800 to bg-emerald-400',
		'bg-gradient-to-br from-teal-800 to bg-teal-400',
		'bg-gradient-to-br from-cyan-800 to bg-cyan-400',
		'bg-gradient-to-br from-sky-800 to bg-sky-400',
		'bg-gradient-to-br from-blue-800 to bg-blue-400',
		'bg-gradient-to-br from-indigo-800 to bg-indigo-400',
		'bg-gradient-to-br from-violet-800 to bg-violet-400',
		'bg-gradient-to-br from-purple-800 to bg-purple-400',
		'bg-gradient-to-br from-fuchsia-800 to bg-fuchsia-400',
		'bg-gradient-to-br from-pink-800 to bg-pink-400',
		'bg-gradient-to-br from-rose-800 to bg-rose-400',
		'bg-gradient-to-br from-stone-800 to bg-stone-400',
		'bg-gradient-to-br from-zinc-800 to bg-zinc-400',
		'bg-gradient-to-br from-slate-800 to bg-slate-400',
		'bg-gradient-to-b from-sky-900 to bg-sky-400',
		'bg-gradient-to-b from-purple-900 to bg-purple-400',
		'bg-gradient-to-b from-emerald-900 to bg-emerald-400',
		'bg-gradient-to-b from-rose-900 to bg-rose-400',
		'bg-opacity-0',
		'bg-opacity-10',
		'bg-opacity-10',
		'bg-opacity-30',
		'bg-opacity-40',
		'bg-opacity-10',
		'bg-opacity-60',
		'bg-opacity-70',
		'bg-opacity-80',
		'bg-opacity-90',
		'bg-opacity-100',
	],
}
