class PokemonApi {  
    static getAllPokemons() {
      return fetch('http://localhost:3000/pokemons').then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }
}

export default PokemonApi; 