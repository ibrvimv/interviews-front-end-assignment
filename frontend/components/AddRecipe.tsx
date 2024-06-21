'use client'
import React from 'react';
import { Close } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, selectCuisines, selectDiets, selectDifficulties, selectModal } from '@/lib/features/recipeSlice';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RecipeFormData } from '@/types/types';
const { v4: uuidv4 } = require('uuid');

//I am sure that it has some bags, but I do not have time to test it for now:)

const AddRecipe = () => {
	const dispatch = useDispatch();

	const diets = useSelector(selectDiets);
	const cuisines = useSelector(selectCuisines);
	const difficulties = useSelector(selectDifficulties);

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
		const ingredientsArray = data.ingredients.split(',').map(ingredient => ingredient.trim());
		recipeData.append('ingredients', JSON.stringify(ingredientsArray));
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

			closeAddRecipeModal();
		} catch (error) {
			console.error('Error uploading recipe:', error);
		}
	};

	return (
		<div className={`${open ? 'block' : 'hidden'} fixed inset-0 z-50 flex flex-col  bg-back`}>
			<div className='flex flex-col gap-2 py-10 px-32 justify-center w-full'>
				<div className='flex justify-between w-full'>
					<h2>Add Recipe</h2>
					<div className='cursor-pointer p-3 ' onClick={closeAddRecipeModal}>
						<Close fontSize='large' />
					</div>
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className='flex gap-40 w-full'>
					<div className='flex flex-col gap-5 w-1/2'>
						<div className=''>
							<label htmlFor='name' className='block px-3 text-sm font-medium text-black mb-3 relative w-full'>
								Name
							</label>
							<input
								className='w-full flex-1 flex-grow px-3 h-14 rounded-xl text-black focus:outline-green focus:outline-2'
								id='name'
								placeholder='Enter recipe name'
								{...register('name')}
							/>
						</div>
						<div>
							<label htmlFor='instructions' className='block px-3 text-sm font-medium text-black mb-3 relative w-full'>
								Instructions
							</label>
							<textarea
								rows={10}
								className='w-full flex-1 flex-grow px-3 py-2 rounded-xl max-h-[400px] text-black focus:outline-green focus:outline-2'
								id='instructions'
								placeholder='Enter recipe instructions'
								{...register('instructions')}
							/>
						</div>
						<div className="flex items-center justify-center w-full">
							<label htmlFor="image" className="flex flex-col items-center justify-center w-full h-44 rounded-lg cursor-pointer bg-white  hover:bg-green hover:text-white">
								<div className="flex flex-col items-center justify-center pt-5 pb-6">
									<svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
									</svg>
									<p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span> or drag and drop</p>
									<p className="text-xs text-gray-500 ">SVG, PNG, JPG or GIF</p>
								</div>
								<input type="file" className="hidden" id='image'
									{...register('image')} />
							</label>
						</div>

					</div>
					<div className='w-1/2 flex flex-col gap-5'>
						<div>
							<label htmlFor='ingredients' className='block px-3 text-sm font-medium text-black mb-3 relative w-full'>
								Ingredients (comma-separated)
							</label>
							<textarea
								rows={4}
								className='w-full flex-1 flex-grow px-3 py-2 rounded-xl text-black focus:outline-green focus:outline-2'
								id='ingredients'
								placeholder='Enter ingredients separated by commas'
								{...register('ingredients')}
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<div>Cuisine type</div>
							<div className='flex gap-2 flex-wrap'>
								{
									cuisines && cuisines.map((item) => {
										return (
											<label key={item.id} className="flex items-center gap-2">
												<input
													className='text-green border-green focus:ring-green'
													type="radio"
													value={item.id}
													{...register('cuisineId')}
												/>
												{item.name}
											</label>
										)
									})
								}
							</div>
						</div>
						<div className='flex flex-col gap-2'>
							<div>Diet</div>
							<div className='flex gap-2'>
								{
									diets && diets.map((item) => {
										return (
											<label key={item.id} className="flex items-center gap-2">
												<input
													className='text-green border-green focus:ring-green'
													type="radio"
													value={item.id}
													{...register('dietId')}
												/>
												{item.name}
											</label>
										)
									})
								}
							</div>
						</div>
						<div className='flex flex-col gap-2'>
							<div>Difficulty</div>
							<div className='flex gap-2'>
								{
									difficulties && difficulties.map((item) => {
										return (
											<label key={item.id} className="flex items-center gap-2">
												<input
													className='text-green border-green focus:ring-green'
													type="radio"
													value={item.id}
													{...register('difficultyId')}
												/>
												{item.name}
											</label>
										)
									})
								}
							</div>
						</div>
						<div className='flex gap-2 w-full'>
							<button type='submit' className='bg-green text-white px-4 py-2 rounded-xl flex-1'>
								Submit
							</button>
							<button onClick={closeAddRecipeModal} className='bg-green text-white px-4 py-2 rounded-xl flex-1'>
								Reset
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AddRecipe;
