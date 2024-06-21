import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/lib/store'
import { Comments, Cuisines, Diets, Difficulties, RecipeItem, RecipeItems } from '@/types/types'

type RecipeBookState = {
	recipes:RecipeItems;
	comments:Comments;
	diets: Diets;
	cuisines: Cuisines;
	difficulties: Difficulties;

}
// Define the initial state using that type
const initialState:RecipeBookState  = {
	recipes:[],
	comments:[],
	diets:[],
	cuisines:[],
	difficulties:[]
}

export const recipeSlice = createSlice({
  name: 'recipe',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
		addRecipe: (state, action: PayloadAction<RecipeItem>) => {
      state.recipes.push(action.payload);
    },
		setRecipes: (state, action: PayloadAction<RecipeItems>) => {
 			state.recipes =  action.payload
    }
  },
})

export const { addRecipe, setRecipes } = recipeSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectRecipes = (state: RootState) => state.recipes;

export default recipeSlice.reducer