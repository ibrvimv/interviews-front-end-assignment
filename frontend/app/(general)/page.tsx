import Home from '@/components/Home';
import { RecipeItems } from '@/types/types';
import { getInitialRecipeItems } from '../api/api';
import Loading from '@/components/Loading';

export default async function Page() {

  const initialData: RecipeItems = await getInitialRecipeItems()

  if (!initialData) return <Loading />
  else return (
    <div>{initialData && <Home initialData={initialData} />}</div>
  );
}
