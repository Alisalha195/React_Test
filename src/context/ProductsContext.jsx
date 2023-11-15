import React from 'react'
import {useContext , createContext} from 'react'

export const ProductContext = React.createContext()


export const ProductContextProvider = ( {children} ) => {
  return ( 
  	<ProductContext.provider>
  		{children}
  	
  	</ProductContext.provider>
  	
  	)
}

// export const ProductContext

// export const {ProductContext , ProductContextProvider}