const colors = [
	'from-red-500',
	'from-orange-500',
	'from-amber-500',
	'from-yellow-500',
	'from-lime-500',
	'from-green-500',
	'from-emerald-500',
	'from-teal-500',
	'from-cyan-500',
	'from-sky-500',
	'from-blue-500',
	'from-indigo-500',
	'from-violet-500',
	'from-purple-500',
	'from-fuchsia-500',
	'from-pink-500',
	'from-rose-500',
	'from-stone-500',
	'from-zinc-500',
	'from-slate-500',
]

export function pickBgColor(id) {
	console.log('\nslug:\n\n', id)
	const index = Math.floor(id.slice(-2) / 5)
	console.log('\nindex\n\n', index)
	const bgColor = colors[index]
	return bgColor
}
