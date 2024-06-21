import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/lib/store'
import { Comments, Cuisines, Diets, Difficulties, RecipeItem, RecipeItems } from '@/types/types'

type RecipeBookState = {
	recipes:RecipeItems;
	comments:Comments;
	diets: Diets;
	cuisines: Cuisines;
	difficulties: Difficulties;
	searchResults: RecipeItems;
	isSearching: boolean;
	filterResults:RecipeItems;
	isFiltering: boolean;
	modal:boolean;
}

const initialState:RecipeBookState  = {
	recipes:[],
	comments:[],
	diets:[],
	cuisines:[],
	difficulties:[],
	searchResults: [],
  isSearching: false,
	filterResults: [],
  isFiltering: false,
	modal: false,
}

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
		//list
	  setRecipes: (state, action: PayloadAction<RecipeItems>) => {
      state.recipes = action.payload;
    },
		setComments: (state, action: PayloadAction<Comments>) => {
      state.comments = action.payload;
    },
		setDiets: (state, action: PayloadAction<Diets>) => {
      state.diets = action.payload;
    },
		setCuisines: (state, action: PayloadAction<Cuisines>) => {
      state.cuisines = action.payload;
    },
		setDifficulties: (state, action: PayloadAction<Difficulties>) => {
      state.difficulties = action.payload;
    },
    appendRecipes: (state, action: PayloadAction<RecipeItems>) => {
      state.recipes = [...state.recipes, ...action.payload];
    },

		//search
    setSearchResults: (state, action: PayloadAction<RecipeItems>) => {
      state.searchResults = action.payload;
      state.isSearching = true;
    },
    resetSearch: (state) => {
      state.searchResults = [];
      state.isSearching = false;
    },

		// filter
		setFilterResults: (state, action: PayloadAction<RecipeItems>) => {
      state.filterResults = action.payload;
      state.isFiltering = true;
    },
    resetFilter: (state) => {
      state.filterResults = [];
      state.isFiltering = false;
    },

		//modal
		openModal: (state) => {
			state.modal = true
		},
		closeModal: (state) => {
			state.modal = false
		}
  },
})

export const {  setRecipes, appendRecipes, setSearchResults, resetSearch, setFilterResults, resetFilter, setComments,setCuisines,setDiets,setDifficulties,openModal, closeModal } = recipeSlice.actions;

export const selectRecipes = (state: RootState) => state.recipes;

export const selectSearchResults = (state: RootState) => state.searchResults;
export const selectIsSearching = (state: RootState) => state.isSearching;

export const selectFilterResults = (state: RootState) => state.filterResults;
export const selectIsFiltering = (state: RootState) => state.isFiltering;

export const selectComments = (state: RootState) => state.comments;

export const selectDiets = (state: RootState) => state.diets;
export const selectDifficulties = (state: RootState) => state.difficulties;
export const selectCuisines= (state: RootState) => state.cuisines;

export const selectModal= (state: RootState) => state.modal;


export default recipeSlice.reducer