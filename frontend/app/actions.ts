"use server"

import { getRecipeItems } from '@/app/api/api';
import { FilterCriteria } from '@/types/types';

export async function fetchRecipes(page: number) {
  const data = await getRecipeItems(page);
  return data;
}

export async function searchRecipes(term: string) {
  const data = await getRecipeItems(1, term);
  return data;
}

export async function filterRecipes(criteria: FilterCriteria) {
  const data = await getRecipeItems(1, '', criteria);
  return data;
}