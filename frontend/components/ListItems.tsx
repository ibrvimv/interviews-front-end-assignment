import React from 'react';
import RecipeCard from './RecipeCard';
import Loading from './Loading';
import { RecipeItem } from '@/types/types';

type PropTypes = {
	displayedData: RecipeItem[];
	loading: boolean;
};

const ListItems: React.FC<PropTypes> = React.memo(({ displayedData, loading }) => {
	return (
		<div className='w-full'>
			<ul className='flex flex-col gap-5'>
				{displayedData.map((item) => (
					<li key={item.id}>
						<RecipeCard item={item} />
					</li>
				))}
			</ul>
			{loading && <Loading />}
		</div>
	);
});

ListItems.displayName = 'ListItems';

export default ListItems;
