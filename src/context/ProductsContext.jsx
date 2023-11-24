import React from 'react'
import {useState,useContext , createContext} from 'react'

export const ProductContext = React.createContext({
	
		products : [] ,
		addProduct : () => {} ,
		removeProduct :()=> {} ,
		darkMode : false , 
		toggleTheme : () => {}
		
})

const productsList = [
	{ name : 'P1' , 
		description : 'this is product one' ,
		isAvailable : false
	} , {
		name: 'P2',
		description: 'this is product two',
		isAvailable: true
	}
]

export const ProductContextProvider = ( {children} ) => {
	
	const [darkMode,setDarkMode] = useState(false)
	
	const addProductFun = (product) => {
		products.concat(product)
	}
	
	const removeProductFun = (product) => {
		products.filter((item) => {
			return (item != products)
		})
	}
	
	const toggleThemeFun = () =>  {
		
		setDarkMode(prev => !prev)
	}
	
	const context = {
		products: productsList ,
		addProduct : addProductFun ,
		removeProduct: removeProductFun ,
		darkMode: darkMode ,
		toggleTheme: toggleThemeFun
	}
	
	
  return ( 
  	<ProductContext.provider value={context}>
  		
  		{children}
  	
  	</ProductContext.provider>
  	
  	)
}

export const useProductContext = () => {
	const contextData = useContext(ProductContext)
	
	return contextData
}

// export const ProductContext

// export const {ProductContext , ProductContextProvider}