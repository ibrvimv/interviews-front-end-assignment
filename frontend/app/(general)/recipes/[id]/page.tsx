import { RecipeItem } from '@/types/types';
import Image from 'next/image';
import { GetStaticPropsContext } from 'next';

export async function generateStaticParams() {
  const posts: Array<RecipeItem> = await fetch('http://localhost:8080/recipes').then((res) => res.json())
  return posts.map((post) => ({
    id: post.id,
  }))
}

const fetchRecipe = async (id: string): Promise<RecipeItem> => {
  const res = await fetch(`http://localhost:8080/recipes/${id}`);
  const data = await res.json();
  return data;
};

const RecipePage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const recipe = await fetchRecipe(id);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
    </div>
  );
};

export default RecipePage;