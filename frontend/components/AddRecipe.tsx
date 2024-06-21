'use client'
import React from 'react'
import { Close } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, selectModal } from '@/lib/features/recipeSlice';



const AddRecipe = () => {
	const dispatch = useDispatch();
	const open = useSelector(selectModal)

	const closeAddRecipeModal = () => {
		dispatch(closeModal())
	}

	return (
		<div className={`${open ? 'block' : 'hidden'} fixed inset-0 z-50 flex flex-col justify-center items-center bg-back`}>
			<div className='flex flex-col gap-2 p-5 items-center justify-center max-w-xl w-full '>
				<div className='flex justify-between w-full'>
					<h2>Add Recipe</h2>
					<div className='cursor-pointer p-3' onClick={closeAddRecipeModal}>
						<Close />
					</div>
				</div>
				<form action="" className='flex flex-col gap-5 w-full'>
					<div>
						<label className='block px-3 text-sm font-medium text-black  mb-3 relative max-w-md w-full '>
							Name
						</label>
						<input
							className='max-w-md w-full flex-1 flex-grow px-3 h-14 rounded-xl text-black  focus:outline-green focus:outline-2'
							id='searchByName'
							type='text'
							placeholder='Enter recipe name'
							value=''
						// onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
					<div>
						<label className='block px-3 text-sm font-medium text-black  mb-3 relative max-w-md w-full '>
							Description
						</label>
						<input
							className='max-w-md w-full flex-1 flex-grow px-3 h-14 rounded-xl text-black  focus:outline-green focus:outline-2'
							id='searchByName'
							type='text'
							placeholder='Enter recipe name'
							value=''
						// onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
					<div>
						<label className='block px-3 text-sm font-medium text-black  mb-3 relative max-w-md w-full '>
							Ingredients
						</label>
						<input
							className='max-w-md w-full flex-1 flex-grow px-3 h-14 rounded-xl text-black  focus:outline-green focus:outline-2'
							id='searchByName'
							type='text'
							placeholder='Enter recipe name'
							value=''
						// onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
					<div>
						<label className='block px-3 text-sm font-medium text-black  mb-3 relative max-w-md w-full '>
							Image
						</label>
						<input
							className='max-w-md w-full flex-1 flex-grow px-3 h-14 rounded-xl text-black  focus:outline-green focus:outline-2'
							id='searchByName'
							type='text'
							placeholder='Enter recipe name'
							value=''
						// onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
					<div>
						<label className='block px-3 text-sm font-medium text-black  mb-3 relative max-w-md w-full '>
							Cuisine type
						</label>
						<input
							className='max-w-md w-full flex-1 flex-grow px-3 h-14 rounded-xl text-black  focus:outline-green focus:outline-2'
							id='searchByName'
							type='text'
							placeholder='Enter recipe name'
							value=''
						// onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
					<div>
						<label className='block px-3 text-sm font-medium text-black  mb-3 relative max-w-md w-full '>
							Diet type
						</label>
						<input
							className='max-w-md w-full flex-1 flex-grow px-3 h-14 rounded-xl text-black  focus:outline-green focus:outline-2'
							id='searchByName'
							type='text'
							placeholder='Enter recipe name'
							value=''
						// onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
					<div>
						<label className='block px-3 text-sm font-medium text-black  mb-3 relative max-w-md w-full '>
							Difficulty type
						</label>
						<input
							className='max-w-md w-full flex-1 flex-grow px-3 h-14 rounded-xl text-black  focus:outline-green focus:outline-2'
							id='searchByName'
							type='text'
							placeholder='Enter recipe name'
							value=''
						// onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AddRecipe