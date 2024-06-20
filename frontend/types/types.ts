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


export type Cuisines = Array<string>
export type Diets = Array<string>
export type Difficulties = Array<string>


export type Comment = {
  id:string;
  recipeId:string;
  comment:string;
  rating:number;
  date:string;
}
export type Comments = Array<Comment>