import {  RecipeItems } from "@/types/types";

export async function getInitialRecipeItems(): Promise<RecipeItems> {
  const res = await fetch(`http://localhost:8080/recipes?_page=1&_limit=5`);

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  const data: RecipeItems = await res.json();
  return data;
}


export async function getRecipeItems(page: number): Promise<RecipeItems> {
  const res = await fetch(`http://localhost:8080/recipes?_page=${page}&_limit=5`);

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  const data: RecipeItems = await res.json();
  return data;
}

