import {Routes , Route} from 'react-router-dom'

import Home from '../pages/Home'
import Products from '../pages/Products'
import Contact from '../pages/Contact'
import About from '../pages/About'

const Main = (  ) => {
  return ( 
  	
  	<>
  		<Routes>
  			<Route path='/home' element={<Home />}/>
  			<Route path='/products' element={<Products />}/>
  			<Route path='/Contactus' element={<Contact />}/>
  			<Route path='/about' element={<About />}/>
  		</Routes>
  	</>
  	)
}

export default Main