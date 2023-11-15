import {Routes , Route} from 'react-router-dom'

import Home from './components/Home'
import Products from './components/Product'
import Contact from './components/Contact'
import About from './components/About'

export default Main = (  ) => {
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