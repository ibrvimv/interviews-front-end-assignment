export type RecipeItem = {
  id: string;
  name: string;
  ingredients: Array<String>;
  instructions: string;
  cuisineId: string;
  dietId: string;
  difficultyId: string;
  image: string;
};

export type RecipeItems = Array<RecipeItem>

export type FilterData = {
  id: string;
  name: string;
}
export type Cuisines = Array<FilterData>
export type Diets = Array<FilterData>
export type Difficulties = Array<FilterData>


export type Comment = {
  id:string;
  recipeId:string;
  comment:string;
  rating:number;
  date:string;
}
export type Comments = Array<Comment>

export type FilterCriteria = {
  diets: string[];
  cuisines: string[];
  difficulties: string[];
};

export type RecipeFormData = {
    id:string;
    name: string;
    instructions: string;
    ingredients: string; // Comma-separated string from form
    cuisineId: string;
    dietId: string;
    difficultyId: string;
    image: FileList;
};