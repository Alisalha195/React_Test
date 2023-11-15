
import pokemon from '../pokemon.json'

export default Pokemons = (  ) => {
  return (  
  	<div>
      {
      	pokemon.map((pokemon) => {
      		return (
      			<>
				   			<h2 key={pokemon.id}>{pokemon.name.english}</h2>
				   			<p>{pokemon.type}</p>
      			</>
      		)
      	})
      }
  	</div>
  	
  	)
}