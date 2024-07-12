import { Comments, RecipeItem } from '@/types/types';
import Image from 'next/image';
import Loading from '@/components/Loading';
import { fetchRecipe, fetchComments } from '@/app/api/api';

const diets = [
  { id: "1", name: "Vegetarian" },
  { id: "2", name: "Mediterranean" },
  { id: "3", name: "Non-Vegetarian" },
  { id: "4", name: "Pescatarian" }
];

const difficulties = [
  { id: "1", name: "Easy" },
  { id: "2", name: "Medium" },
  { id: "3", name: "Hard" }
];

// Mapper function
function mapIdToName(id: string, mapper: { id: string, name: string }[]) {
  const item = mapper.find(item => item.id === id);
  return item ? item.name : "Unknown";
};

export async function generateStaticParams() {
  const posts: Array<RecipeItem> = await fetch('http://localhost:8080/recipes').then((res) => res.json());
  return posts.map((post) => ({
    id: post.id,
  }));
}

const RecipePage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  let recipe: RecipeItem | null = null;
  let comments: Comments | null = null;

  try {
    recipe = await fetchRecipe(id);
    comments = await fetchComments();
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }

  if (!recipe) {
    return <Loading />;
  }

  const dietName = mapIdToName(recipe.dietId, diets);
  const difficultyName = mapIdToName(recipe.difficultyId, difficulties);

  return (
    <div>
      <div className='flex gap-5 mb-5'>
        <div className='relative w-1/2 rounded-xl aspect-video overflow-hidden'>
          <Image src={`http://localhost:8080${recipe.image}`} alt={recipe.name} fill className='object-cover' />
        </div>
        <div className='w-1/2 aspect-video'>
          <h1 className='font-bold text-xl mb-2'>{recipe.name}</h1>
          <div className='flex flex-col gap-2 justify-between h-full'>
            <div>
              <p className='mb-5'>{recipe.instructions}</p>
              <div>
                <h2 className='text-md font-semibold'>
                  Ingredients:
                </h2>
                {recipe.ingredients.map((ingredient, index) => (
                  <p className='text-xs font-thin' key={index}>
                    {ingredient}
                  </p>
                ))}
              </div>
            </div>
            <div className='flex gap-5'>
              <p className='text-md font-thin uppercase'>diet: {dietName}</p>
              <p className='text-md font-thin uppercase'>difficulty: {difficultyName}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='text-lg font-bold'>Reviews</div>
        <div>
          {comments && comments.map((item, key) => (
            <div key={key}>
              <div className='flex flex-col'>
                {recipe.id === item.id && (
                  <>
                    <div>{item.comment}</div>
                    <div>{item.rating} Stars</div>
                    {/* <div>{item.date}</div> */}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
