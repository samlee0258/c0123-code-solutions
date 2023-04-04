
async function logJSONData() {
  try {
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonUsers = await users.json();
    console.log('users:', jsonUsers);
  } catch (error) {
    console.error(error);
  }
}

async function logPokemons() {
  try {
    const bulbasaur = await fetch('https://pokeapi.co/api/v2/poemon/1');
    const jsonBulbasaur = await bulbasaur.json();
    console.log('bulbasaur:', jsonBulbasaur);
  } catch (error) {
    console.error(error);
  }
}

logJSONData();
logPokemons();
