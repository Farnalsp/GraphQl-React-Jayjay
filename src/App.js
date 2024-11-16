import './App.css';
import { gql, useQuery } from '@apollo/client';

const pokemonqueryByName = gql`
  query Pokemon($name: String) {
    pokemon(name: $name) {
      number
      name
      image
    }
  }
`;

const App = () => {
  const { data: pokemonData, loading, refetch, error } = useQuery(pokemonqueryByName, {
    variables: { name: 'bulbasaur' }
  });

  return (
    <div className="App">
      <header className="App-header">
      <h1>Halo, Selamat Datang di Jayjay API</h1>
      <h3>Kali ini kita akan menampilkan Bulbasaur</h3>
        <hr />
        {error ? <div>Terjadi Error!</div> : loading ? <div>Loading...</div> : (
          <>
            <h4>{pokemonData.pokemon.name}</h4>
            <img alt={pokemonData.pokemon.number} src={pokemonData.pokemon.image} />
            <button onClick={() => refetch({ variables: { name: 'bulbasaur' } })}>refresh</button>
          </>
        )}
      </header>
    </div>
  );
};

export default App;