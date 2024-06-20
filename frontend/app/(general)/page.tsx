import Home from '@/components/Home';
import { RecipeItems } from '@/types/types';
import { getInitialRecipeItems } from '../api/api';

export default async function Page() {

  const initialData: RecipeItems = await getInitialRecipeItems()
  if (!initialData) return <div>Loading...</div>
  else return (
    <div>{initialData && <Home initialData={initialData} />}</div>
  );
}
