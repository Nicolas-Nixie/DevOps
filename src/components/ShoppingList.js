import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import SortingProductBy from './SortingProductBy'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const [activeSorting, setActiveSorting] = useState('')
	const [activeSortingType, setActiveSortingType] = useState('')

	const categories = plantList.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	)

	function addToCart(name, price) {
		const currentPlantAdded = cart.find((plant) => plant.name === name)
		if (currentPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	function setSortingBy(sort, type){
		setActiveSorting(sort)
		setActiveSortingType(type)
		if(sort === "croissant"){
			plantList.sort((a, b) => (a[type] > b[type]) ? 1 : -1)
		}if (sort === "decroissant") {
			plantList.sort((a, b) => (a[type] < b[type]) ? 1 : -1)
		}
	}


	return (
		<div className='lmj-shopping-list'>
			<div>
				<Categories
					categories={categories}
					setActiveCategory={setActiveCategory}
					activeCategory={activeCategory}
				/>
				<SortingProductBy
					activeSorting={activeSorting}
					setSortingBy={setSortingBy}
					activeSortingType={activeSortingType}
				/>
			</div>
			
			
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList
