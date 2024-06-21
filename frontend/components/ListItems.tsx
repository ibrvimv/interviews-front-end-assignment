import React from 'react'
import RecipeCard from './RecipeCard'
import Loading from './Loading'
import { RecipeItems } from '@/types/types'

type PropTypes = {
	displayedData: RecipeItems;
	loading: boolean;
}

const ListItems: React.FC<PropTypes> = ({ displayedData, loading }) => {
	return (
		<div className='w-full'>
			<ul className='flex flex-col gap-5'>
				{displayedData.map((item, index) => (
					<li key={index}>
						<RecipeCard item={item} />
					</li>
				))
				}
			</ul>
			{loading && <Loading />}
		</div>
	)
}

export default ListItems