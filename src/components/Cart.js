import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])

	
	const handleRemove = (amount) => {
		amount = amount - 1
		console.log('F1', amount)
		return amount
	}

	const handleAdd = (amount) => {
		amount = amount + 1
		console.log('F2', amount)
		return amount
	}

	const handleTrash = (amount) => {
		amount = 0
		console.log('F3', amount)
		return amount
	}

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div className='modif-nbr-artcle' key={`${name}-${index}`}>
								{name} {price}€ x {amount}
								{console.log(amount)}
								<a> </a>
								<button
									className='lmj-cart-toggle-button'
									onClick={() => handleRemove}
								>
									<ion-icon name="remove-outline"></ion-icon>
								</button>
								<button
									className='lmj-cart-toggle-button'
									onClick={() => handleAdd}
								>
									<ion-icon name="add-outline"></ion-icon>
								</button>								<button
									className='lmj-cart-toggle-button'
									onClick={() => handleTrash}
								>
									<ion-icon name="trash-bin-outline"></ion-icon>
								</button>
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart
