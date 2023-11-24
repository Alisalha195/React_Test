export default Sidebar = ( {toggleTheme} ) => {
  return ( 
  	<div>
  		<h2>Settings</h2>
  		
  		<div>
  			<button onClick={toggleTheme}>toggle theme</button>
  		</div>
  		<div>
  			<p>color</p>
  			<div>
  				<span> red</span>
  				<span> blue</span>
  				<span>green </span>
  			</div>
  			
  			<p>elements number</p> 
  			<div >
  				<span> 4</span> 
  				<span> 6</span> 
  				<span> 10</span> 
				</div>
  			
  		</div>
  	
  	</div>
  	)
}