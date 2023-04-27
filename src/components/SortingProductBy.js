
function SortingProductBy({setSortingBy, activeSorting , activeSortingType }) {

	return (
		<div className='lmj-categories'>
			
			<select
				value={activeSortingType}
				onChange={(e) => setSortingBy(activeSorting, e.target.value)}
				className='lmj-sorting-select'
			>
				<option value=''>---</option>
				<option value='water'>Eau</option>
				<option value='light'>Lumière</option>
			</select>

			<select
				value={activeSorting}
				onChange={(e) => setSortingBy(e.target.value, activeSortingType)}
				className='lmj-sorting-select'
			>
				<option value=''>---</option>
				<option value='croissant'>croissant</option>
				<option value='decroissant'>decroissant</option>
			</select>
		</div>
	)
}

export default SortingProductBy
