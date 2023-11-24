import {Link} from 'react-router-dom'

const Header = (  ) => {
  return (  
 			<>
 				<h2> Logo </h2>
 				<ul>
 					<li><Link to='/home'>Home</Link></li>
 					<li><Link to='products'>Products</Link></li>
 					<li><Link to='about'>About us</Link></li>
 					<li><Link to='contact'>Contact us</Link></li>
 				</ul>
 			</>
  	)
}

export default Header