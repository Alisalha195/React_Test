import React from 'react'
import Product from '../components/Product'
import ProductContext from '../context/ProductsContext'

import useProductContext from '../context/ProductsContext'

const Products = () => {
	
	const products = useProductContext.products

	return (
		<ul>
			{
				products.map((item , index) =>{
					return 
					< Product key={index} 
										description = {item.description }
										
										name = {item.name}
										isAvailable = {item.isAvailable}
										/ >
				})
			}
		</ul>
	)

}

export default Products