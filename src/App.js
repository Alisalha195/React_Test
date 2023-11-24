import {Routes , Route , BrowserRouter} from 'react-router-dom'
import "./App.css";

// import Pokemons from './components/Pokemon'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Footer from './components/Footer'

import {ProductContextProvider} from './context/ProductsContext'
// import ProductContextProvider from './context/ProductContextProvider'
// import ProductContext from './context/ProductContext'
// import ProductContextProvider from './context/ProductContextProvider'


import About from './pages/About'
import AddProduct from './pages/AddProduct'

function App() {
   return (
      <>
      <ProductContextProvider>
	      <BrowserRouter>
			    <Header />
			    <Sidebar />
			    <Main />
			    <Footer />
	      </BrowserRouter>
      </ProductContextProvider>
      
      
      
      
      </>
   );
}

export default App