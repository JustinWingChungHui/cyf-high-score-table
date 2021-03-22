import React, {useState} from 'react';
import './App.css';
import Country from './Country';
import allCountryScores from './scores';

function App() {

  const countries = allCountryScores.sort(
    (a, b) => a.name > b.name ? 1 : -1
  ).slice();

  const worldwide = {
    name: 'World-Wide',
    scores: [].concat(...allCountryScores.map(c => c.scores))
  };

  console.log(worldwide);

  const [sort, setSort] = useState('descending');
  
  const sortClicked = () => {
    if (sort === 'descending') {
      setSort('ascending');
    } else {
      setSort('descending');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        High Scores Per Country
      </header>
      <button onClick={sortClicked}>Sort</button>

      {/* Worldwide */}
      <Country key={worldwide.name} country={worldwide} sortOrder={sort}/>

      {/* all countries individually */}
      {countries.map((country) => 
        <Country key={country.name} country={country} sortOrder={sort}/>
      )}

    </div>
  );
}

export default App;
