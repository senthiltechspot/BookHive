import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import UserContext from '../../../store/userContext'
import SnackbarContext from '../../../store/snackbarContext'
import LoginBanner from '../../../components/login/LoginBanner'
import PageHeader from '../../../components/layouts/PageHeader'
import SearchBar from '../../../components/SearchBar'
import PlusIcon from '../../../assets/icons/PlusIcon'
import PlusCircleIcon from '../../../assets/icons/PlusCircleIcon'
import ArrowIcon from '../../../assets/icons/ArrowIcon'

function SelectBook() {
	const snackbarCtx = useContext(SnackbarContext)
	const { user } = useContext(UserContext)
	const [activeUser, setActiveUser] = useState(null)
	const [book, setBook] = useState(null)
	const router = useRouter()

	useEffect(() => {
		setActiveUser(user?.data)
	}, [user])

	const nextPageHandler = () => {
		if (!book) snackbarCtx.addMessage({ title: 'Please select a book which you want to upload' })
		else router.push('')
	}

	return (
		<Fragment>
			<Head>
				<title>Select Book</title>
				<meta name='description' content='Upload Book page for creators' />
			</Head>

			{!activeUser ? (
				<LoginBanner
					title='Your Upload Books'
					message='Login as a creator or author to upload books, short stories or poems'
					icon={<PlusCircleIcon />}
				/>
			) : (
				<div className='page-gradient pb-16 xl:pb-8'>
					<PageHeader pageTitle='Select Book' backBtn={true} />
					<div className='p-2 xl:p-4'>
						<p className='text-xl font-bold p-2 xl:p-4'>Select book which you want to upload</p>
					</div>
					<div className='p-2 pb-2 xl:p-4 xl:pb-3 xl:px-5 sm:w-3/5 md:w-1/2 lg:w-2/5'>
						<p className='text-xl font-medium text-center p-2 xl:p-4'>Find book from our collection</p>
						<SearchBar />
					</div>
					<div className='flex items-center relative w-full my-4 xl:m-8'>
						<hr className='border-t-[0.1px] m-4 w-1/2 sm:w-40 border-gray-600' />
						<p className='text-gray-600 -mt-2 px-2'>or</p>
						<hr className='border-t-[0.1px] m-4 w-1/2 sm:w-40 border-gray-600' />
					</div>
					<div className='flex flex-col justify-between m-4'>
						<p className='text-xl font-medium p-2 xl:p-4'>Upload your own book</p>
						<div className='flex items-center justify-between rounded-lg w-full sm:w-3/5 md:w-1/2 lg:w-2/5 sm:mr-8 gap-6 bg-[#192136]'>
							<p className='font-size-[1.5rem] font-medium p-3 xl:p-3.5'>Add New Book</p>
							<div className='flex items-center p-3 xl:p-3.5 rounded-lg bg-[#111844]'>
								<PlusIcon dimensions='h-6 w-6' />
							</div>
						</div>
					</div>
					<div className='flex justify-center max-w-[20rem] p-6 sm:p-8'>
						<button onClick={nextPageHandler} className={book ? 'btn-next' : 'btn-next-inactive'}>
							<span>Next</span>
							<ArrowIcon />
						</button>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default SelectBook
