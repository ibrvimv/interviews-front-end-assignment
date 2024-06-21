import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/lib/store'
import { Comments, Cuisines, Diets, Difficulties, RecipeItem, RecipeItems } from '@/types/types'

type RecipeBookState = {
	recipes:RecipeItems;
	comments:Comments;
	diets: Diets;
	cuisines: Cuisines;
	difficulties: Difficulties;
	searchResults:RecipeItems;
	isSearching: boolean;
}
// Define the initial state using that type
const initialState:RecipeBookState  = {
	recipes:[],
	comments:[],
	diets:[],
	cuisines:[],
	difficulties:[],
	searchResults: [],
  isSearching: false,
}

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
		// addRecipe: (state, action: PayloadAction<RecipeItem>) => {
    //   state.recipes.push(action.payload);
    // },
	  setRecipes: (state, action: PayloadAction<RecipeItems>) => {
      state.recipes = action.payload;
    },
    appendRecipes: (state, action: PayloadAction<RecipeItems>) => {
      state.recipes = [...state.recipes, ...action.payload];
    },
    setSearchResults: (state, action: PayloadAction<RecipeItems>) => {
      state.searchResults = action.payload;
      state.isSearching = true;
    },
    resetSearch: (state) => {
      state.searchResults = [];
      state.isSearching = false;
    }
  },
})

export const {  setRecipes, appendRecipes, setSearchResults, resetSearch } = recipeSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectRecipes = (state: RootState) => state.recipes;
export const selectSearchResults = (state: RootState) => state.searchResults;
export const selectIsSearching = (state: RootState) => state.isSearching;


export default recipeSlice.reducer