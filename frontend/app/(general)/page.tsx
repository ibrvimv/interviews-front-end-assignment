import Home from '@/components/Home';
import { RecipeItem } from '@/types/types';

export default async function Page() {
  const res = await fetch('http://localhost:8080/recipes?_page=1&_limit=5');
  const initialData: RecipeItem[] = await res.json();
  return (
    <div className=''>
      <Home initialData={initialData} />
    </div>
  );
}
