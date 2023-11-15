import {Routes , Route , BrowserRouter} from 'react-router-dom'
import "./App.css";

import Pokemons from './components/Pokemon'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Footer from './components/Footer'

import ProductContext from './context'
import ProductContextProvider from './context'

import {BrowserRouter} from 'react-router-dom'
import About from '/pages/'
import AddProduct from '/pages/'

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