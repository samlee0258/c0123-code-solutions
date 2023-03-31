import PokemonList from "./PokemonList.js";

export const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function App() {


  return (
    <div>
      <PokemonList pokedex={pokedex}/>
    </div>
  );
}

export default App;
