import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'
import graines_fraise from '../assets/graines_fraise.jpg'
import graines_radis from '../assets/graines_radis.jpg'
import graines_pivoine from '../assets/graines_pivoine.jpg'
import graines_coquelicot from '../assets/graines_coquelicot.jpg'


export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		bestSale: true,
		light: 2,
		water: 3,
		cover: monstera,
		price: 15
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		light: 3,
		water: 1,
		cover: lyrata,
		price: 16
	},

	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		light: 1,
		water: 2,
		cover: pothos,

		price: 9
	},
	{
		name: 'calathea',
		category: 'classique',
		id: '4kk',
		light: 2,
		water: 3,
		cover: calathea,

		price: 20
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		light: 3,
		water: 1,
		cover: olivier,
		price: 25
	},

	{
		name: 'cactus',
		category: 'plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
		cover: cactus,
		price: 6
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		bestSale: true,
		light: 2,
		water: 3,
		cover: basil,
		price: 5
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: succulent,
		price: 8
	},

	{
		name: 'menthe',
		category: 'extérieur',
		id: '6aa',
		light: 2,
		water: 2,
		cover: mint,
		price: 4
	},
	{
		name: 'graine fraise',
		category: 'graines',
		id: '6zz',
		light: 4,
		water: 3,
		cover: graines_fraise,
		price: 7
	},
	{
		name: 'graine radis',
		category: 'graines',
		id: '6ee',
		light: 2,
		water: 2,
		cover: graines_radis,
		price: 2
	},
	{
		name: 'graine pivoine',
		category: 'graines',
		id: '6rr',
		light: 4,
		water: 4,
		cover: graines_pivoine,
		price: 3
	},
	{
		name: 'graine coquelicot',
		category: 'graines',
		id: '6tt',
		light: 5,
		water: 2,
		cover: graines_coquelicot,
		price: 6
	}
]
