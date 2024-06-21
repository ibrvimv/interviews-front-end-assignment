'use client'
import React from 'react';
import { Close } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, selectModal } from '@/lib/features/recipeSlice';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RecipeFormData } from '@/types/types';
const { v4: uuidv4 } = require('uuid');

const AddRecipe = () => {
	const dispatch = useDispatch();
	const open = useSelector(selectModal);
	const { register, handleSubmit, reset } = useForm<RecipeFormData>();

	const closeAddRecipeModal = () => {
		dispatch(closeModal());
		reset();
	};

	const onSubmit: SubmitHandler<RecipeFormData> = async (data) => {
		const recipeData = new FormData();
		recipeData.append('id', uuidv4());
		recipeData.append('name', data.name);
		recipeData.append('instructions', data.instructions);
		recipeData.append('ingredients', JSON.stringify(data.ingredients.split(',').map(ingredient => ingredient.trim())));
		recipeData.append('cuisineId', data.cuisineId);
		recipeData.append('dietId', data.dietId);
		recipeData.append('difficultyId', data.difficultyId);
		if (data.image[0]) {
			recipeData.append('image', data.image[0]);
		}

		try {
			const response = await fetch('http://localhost:8080/recipes', {
				method: 'POST',
				body: recipeData
			});
			const result = await response.json();
			console.log(result);
			closeAddRecipeModal();
		} catch (error) {
			console.error('Error uploading recipe:', error);
		}
	};

	return (
		<div className={`${open ? 'block' : 'hidden'} fixed inset-0 z-50 flex flex-col justify-center items-center bg-back`}>
			<div className='flex flex-col gap-2 p-5 items-center justify-center max-w-xl w-full'>
				<div className='flex justify-between w-full'>
					<h2>Add Recipe</h2>
					<div className='cursor-pointer p-3' onClick={closeAddRecipeModal}>
						<Close />
					</div>
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 w-full'>
					<div>
						<label htmlFor='name' className='block px-3 text-sm font-medium text-black mb-3 relative max-w-md w-full'>
							Name
						</label>
						<input
							className='max-w-md w-full flex-1 flex-grow px-3 h-14 rounded-xl text-black focus:outline-green focus:outline-2'
							id='name'
							placeholder='Enter recipe name'
							{...register('name')}
						/>
					</div>
					<div>
						<label htmlFor='instructions' className='block px-3 text-sm font-medium text-black mb-3 relative max-w-md w-full'>
							Instructions
						</label>
						<input
							className='max-w-md w-full flex-1 flex-grow px-3 h-14 rounded-xl text-black focus:outline-green focus:outline-2'
							id='instructions'
							placeholder='Enter recipe instructions'
							{...register('instructions')}
						/>
					</div>
					<div>
						<label htmlFor='ingredients' className='block px-3 text-sm font-medium text-black mb-3 relative max-w-md w-full'>
							Ingredients (comma-separated)
						</label>
						<input
							className='max-w-md w-full flex-1 flex-grow px-3 h-14 rounded-xl text-black focus:outline-green focus:outline-2'
							id='ingredients'
							placeholder='Enter ingredients separated by commas'
							{...register('ingredients')}
						/>
					</div>
					<div>
						<label htmlFor='image' className='block px-3 text-sm font-medium text-black mb-3 relative max-w-md w-full'>
							Image
						</label>
						<input
							className='max-w-md w-full flex-1 flex-grow px-3 h-14 rounded-xl text-black focus:outline-green focus:outline-2'
							id='image'
							type='file'
							{...register('image')}
						/>
					</div>
					<div>
						<label htmlFor='cuisineId' className='block px-3 text-sm font-medium text-black mb-3 relative max-w-md w-full'>
							Cuisine type
						</label>
						<input
							className='max-w-md w-full flex-1 flex-grow px-3 h-14 rounded-xl text-black focus:outline-green focus:outline-2'
							id='cuisineId'
							placeholder='Enter cuisine type'
							{...register('cuisineId')}
						/>
					</div>
					<div>
						<label htmlFor='dietId' className='block px-3 text-sm font-medium text-black mb-3 relative max-w-md w-full'>
							Diet type
						</label>
						<input
							className='max-w-md w-full flex-1 flex-grow px-3 h-14 rounded-xl text-black focus:outline-green focus:outline-2'
							id='dietId'
							placeholder='Enter diet type'
							{...register('dietId')}
						/>
					</div>
					<div>
						<label htmlFor='difficultyId' className='block px-3 text-sm font-medium text-black mb-3 relative max-w-md w-full'>
							Difficulty type
						</label>
						<input
							className='max-w-md w-full flex-1 flex-grow px-3 h-14 rounded-xl text-black focus:outline-green focus:outline-2'
							id='difficultyId'
							placeholder='Enter difficulty type'
							{...register('difficultyId')}
						/>
					</div>
					<button type='submit' className='bg-green-500 text-white px-4 py-2 rounded'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default AddRecipe;
