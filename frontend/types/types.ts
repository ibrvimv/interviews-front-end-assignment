import { Url } from 'next/dist/shared/lib/router/router';

export type RecipeItem = {
  id: string;
  name: string;
  ingredients: Array<String>;
  instructions: string;
  cuisineId: string;
  dietId: string;
  difficultyId: string;
  image: Url;
};
