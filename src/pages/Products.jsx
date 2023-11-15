import React from 'react'
import Product from '../components/Product'

export default Products = () => {
	
	const products = [{
		id:'1' ,
		title:'product1'
	} , {
		id: '2',
		title: 'product2'
	}]

	return (
		<ul>
			{
				products.map((item , index) =>{
					return 
					< Product key={index} title={item.title} / >
				})
			}
		</ul>
	)

}