import React from 'react'
import {useContext , createContext} from 'react'

const ProductContext = React.createContext()


export const ProductContextProvider = ( {children} ) => {
  return ( 
  	<ProductContext.provider>
  		{children}
  	
  	</ProductContext.provider>
  	
  	)
}

export const ProductContext