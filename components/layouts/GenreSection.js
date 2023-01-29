export default function GenresSection() {
	return (
		<section id='creations'>
			<div className='container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0'>
				<div className='flex justify-center mb-20 md:justify-between'>
					<h2 className='text-4xl text-center uppercase md:text-left md:text-5xl'>
						Popular Genres
					</h2>
				</div>
				<div className='item-container'>
					<div className='group item'>
						<img
							src='images/genres/image-deep-earth.jpg'
							alt=''
							className='hidden w-full duration-200 md:block group-hover:scale-110'
						/>
						<div className='item-gradient'></div>
						<h5>{genre}</h5>
					</div>
				</div>
			</div>
		</section>
	)
}