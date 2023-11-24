import React from 'react'

const Product = ({name, description , isAvailable}) => {
	
	return (
		<li> 
				<h3>{name}</h3>
				<p> {description}</p>
				{isAvailable ? <span>available </span> : <span>not available</span>}
		</li>
		)
	
}

export default Product