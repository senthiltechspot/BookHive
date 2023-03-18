import { useEffect, useRef, Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import useWindowWidth from '../../hooks/useWindowWidth'
import { getTopAuthors } from '../../api/authors'
import ListGridModal from '../../components/modals/ListGridModal'
import TopNavModal from '../../components/modals/TopNavModal'
// import Paginate from '../../components/widgets/Paginate'

function AuthorListPage(props) {
	const coverRef = useRef()
	const pageRef = useRef(null)
	const windowWidth = useWindowWidth()

	const router = useRouter()

	// useEffect(() => {
	// const books = getGenreBooks(props.genreId,{page:router.query.page})
	// }, [router.asPath])

	return (
		<Fragment>
			<Head>
				<title>Popular Authors</title>
				<meta name='description' content='A list of all popular authors!' />
			</Head>
			<div className='pb-16 xl:pb-12' ref={pageRef}>
				{windowWidth < 1280 && (
					<TopNavModal pageTitle='Popular Authors' coverRef={coverRef} />
				)}
				<div className='h-full mb-12' ref={pageRef}>
					{windowWidth < 1280 && (
						<TopNavModal
							pageTitle={'Popular Authors'}
							pageRef={pageRef}
							coverRef={coverRef}
						/>
					)}
					<ListGridModal
						listTitle='Popular authors'
						coverRef={coverRef}
						authors={props.authors}
					/>
					{/* <Paginate totalPages={5} page={1} /> */}
				</div>
			</div>
		</Fragment>
	)
}

export async function getStaticProps() {
	const authors = await getTopAuthors({ page: 2 })

	if (!authors) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			authors: authors.data,
		},
		revalidate: 600, //for production
	}
}

export default AuthorListPage
