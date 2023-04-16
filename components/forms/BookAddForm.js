import { useState, useEffect, useContext } from 'react'

import SnackbarContext from '../../store/snackbarContext'
import { createBook } from '../../API/books'
import ImageIcon from '../../assets/icons/ImageIcon'

function BookAddForm({ selectBookHandler, saveBook }) {
	const snackbarCtx = useContext(SnackbarContext)
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [ISBN_10, setISBN_10] = useState('')
	const [ISBN_13, setISBN_13] = useState('')
	const [image, setImage] = useState('')
	const [language, setLanguage] = useState('')
	const [publisher, setPublisher] = useState('')
	const [publicationDate, setPublicationDate] = useState('')

	useEffect(() => {
		if (saveBook) {
			;(async () => {
				const book = { title, description, ISBN_10, ISBN_13, image, language, publisher, publicationDate }
				const data = await createBook(book)
				if (!data.book) snackbarCtx.addMessage({ title: data })
				else selectBookHandler(data.book)
			})()
		}
	}, [saveBook])

	return (
		<form>
			<div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
				<div className='col-span-full'>
					<label htmlFor='title' className='block text-sm font-medium leading-6 text-white'>
						Title
					</label>
					<div className='mt-2'>
						<input
							type='text'
							name='title'
							id='title'
							autoComplete='title'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className='block w-full rounded-md border-0 px-2 py-1.5 bg-[#192136] text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[#8C6AFF] sm:text-sm sm:leading-6'
						/>
					</div>
				</div>
				<div className='col-span-full'>
					<label htmlFor='description' className='block text-sm font-medium leading-6 text-white'>
						Description
					</label>
					<div className='mt-2'>
						<textarea
							id='description'
							name='description'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							rows='3'
							placeholder='Write a few sentences about this book'
							className='block w-full rounded-md border-0 px-2 py-1.5 bg-[#192136] text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[#8C6AFF] sm:text-sm sm:leading-6'
						/>
					</div>
				</div>

				<div className='col-span-full'>
					<label htmlFor='cover-photo' className='block text-sm font-medium leading-6 text-white'>
						Cover photo
					</label>
					<div className='mt-2 flex justify-center w-2/3 rounded-lg border border-dashed border-gray-600 py-4'>
						<div className='flex flex-col items-center justify-center'>
							<ImageIcon />
							<div className='flex text-sm leading-6 text-gray-400'>
								<label
									htmlFor='file-upload'
									className='relative cursor-pointer rounded-md font-semibold text-[#8C6AFF] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#8C6AFF] focus-within:ring-offset-2 hover:text-indigo-500'>
									<span>Upload a file</span>
									<input id='file-upload' name='file-upload' type='file' className='sr-only' />
								</label>
								<p className='text-sm leading-5 text-gray-400 pl-1'>or drag and drop</p>
							</div>
							<p className='text-sm leading-5 text-gray-400'>PNG, JPG up to 1MB</p>
						</div>
					</div>
				</div>

				<div className='sm:col-span-3'>
					<label htmlFor='ISBN_10' className='block text-sm font-medium leading-6 text-white'>
						ISBN 10
					</label>
					<div className='mt-2'>
						<input
							type='text'
							name='ISBN_10'
							id='ISBN_10'
							autoComplete='ISBN_10'
							value={ISBN_10}
							onChange={(e) => setISBN_10(e.target.value)}
							className='block w-full rounded-md border-0 px-2 py-1.5 bg-[#192136] text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[#8C6AFF] sm:text-sm sm:leading-6'
						/>
					</div>
				</div>

				<div className='sm:col-span-3'>
					<label htmlFor='ISBN_13' className='block text-sm font-medium leading-6 text-white'>
						ISBN 13
					</label>
					<div className='mt-2'>
						<input
							type='text'
							name='ISBN_13'
							id='ISBN_13'
							autoComplete='ISBN_13'
							value={ISBN_13}
							onChange={(e) => setISBN_13(e.target.value)}
							className='block w-full rounded-md border-0 px-2 py-1.5 bg-[#192136] text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[#8C6AFF] sm:text-sm sm:leading-6'
						/>
					</div>
				</div>

				<div className='sm:col-span-3'>
					<label htmlFor='language' className='block text-sm font-medium leading-6 text-white'>
						Language
					</label>
					<div className='mt-2'>
						<select
							id='language'
							name='language'
							autoComplete='language-name'
							value={language}
							onChange={(e) => setLanguage(e.target.value)}
							className='block w-full rounded-md border-0 px-2 py-1.5 bg-[#192136] text-white shadow-sm focus:ring-2 focus:ring-[#8C6AFF] sm:max-w-xs sm:text-sm sm:leading-6'>
							<option>English</option>
							<option>Hindi</option>
							<option>Bangla</option>
							<option>Punjabi</option>
							<option>Marathi</option>
							<option>Telugu</option>
						</select>
					</div>
				</div>
				<div className='sm:col-span-3 sm:col-start-1'>
					<label htmlFor='publisher' className='block text-sm font-medium leading-6 text-white'>
						Publisher
					</label>
					<div className='mt-2'>
						<input
							type='text'
							name='publisher'
							id='publisher'
							value={publisher}
							onChange={(e) => setPublisher(e.target.value)}
							autoComplete='publisher'
							className='block w-full rounded-md border-0 px-2 py-1.5 bg-[#192136] text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[#8C6AFF] sm:text-sm sm:leading-6'
						/>
					</div>
				</div>

				<div className='sm:col-span-3'>
					<label htmlFor='publication-date' className='block text-sm font-medium leading-6 text-white'>
						Publication Date
					</label>
					<div className='mt-2'>
						<input
							type='date'
							name='publication-date'
							id='publication-date'
							value={publicationDate}
							onChange={(e) => setPublicationDate(e.target.value)}
							autoComplete='address-level1'
							className='block w-full rounded-md border-0 px-2 py-1.5 bg-[#192136] text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-[#8C6AFF] sm:text-sm sm:leading-6'
						/>
					</div>
				</div>
			</div>
		</form>
	)
}

export default BookAddForm