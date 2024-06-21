import {  Comments, Cuisines, Diets, Difficulties, RecipeItems } from "@/types/types";

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


export async function getCuisines(): Promise<Cuisines> {
  const res = await fetch(`http://localhost:8080/cuisines`);

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  const data: Cuisines = await res.json();
  return data;
}

export async function getDiets(): Promise<Diets> {
  const res = await fetch(`http://localhost:8080/diets`);

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  const data: Diets = await res.json();
  return data;
}


export async function getDifficulies(): Promise<Difficulties> {
  const res = await fetch(`http://localhost:8080/difficulties`);

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  const data: Difficulties = await res.json();
  return data;
}

export async function getComments(): Promise<Comments> {
  const res = await fetch(`http://localhost:8080/comments`);

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  const data: Comments = await res.json();
  return data;
}


//Serach

export async function getRecipeByName(name: string): Promise<RecipeItems> {
  const res = await fetch(`http://localhost:8080/recipes?_page=1&_limit=5&name=${encodeURIComponent(name)}`);

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  const data: RecipeItems = await res.json();
  return data;
}