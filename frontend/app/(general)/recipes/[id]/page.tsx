import { Comments, RecipeItem } from '@/types/types';
import Image from 'next/image';
import { GetStaticPropsContext } from 'next';
import { getComments } from '@/app/api/api';

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

  const comments: Comments = await getComments()

  return (
    <div>
      <div className='flex gap-5 mb-5'>
        <div className='relative w-1/2 rounded-xl aspect-video overflow-hidden'>
          <Image src={`http://localhost:8080${recipe?.image}`} alt={recipe.name} fill className='object-cover' />
        </div>
        <div className='w-1/2 aspect-video'>
          <h1 className='font-bold text-xl mb-2'>{recipe.name}</h1>
          <div className=' flex flex-col gap-2 justify-between h-full'>
            <div>
              <p className='mb-5'>{recipe.instructions}</p>
              <div >
                <h2 className='text-md font-semibold'>
                  Ingredients:
                </h2>
                {recipe.ingredients.map((ingredient, index) => {
                  return (
                    <p className='text-xs font-thin' key={index}>
                      {ingredient}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className='flex gap-5'>
              <p className='text-md font-thin uppercase'>diet: {recipe.dietId}</p>
              <p className='text-md font-thin uppercase'>difficulty: {recipe.difficultyId}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='text-lg font-bold'>Reviews</div>
        <div>
          {
            comments?.map((item, key) => {
              return <div key={key}>
                <div className='flex flex-col'>
                  <div>{recipe.id === item.id ? item.comment : null}</div>
                  <div> {recipe.id === item.id ? item.rating + ' Stars' : null}</div>
                  <div>  {recipe.id === item.id ? item.date : null}</div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default RecipePage;