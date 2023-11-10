import {Routes , Route } from 'react-router-dom'
import "./App.css";

function App() {
   return (
      <div className="App">
         <Routes>
         	<Route path='/' element='products' />
         	<Route path='/add' element='add' />
         	<Route path='/about' element='about' />
         </Routes>
         
      </div>
   );
}

export default App