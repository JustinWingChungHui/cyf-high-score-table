import React, {useState} from 'react';
import './App.css';
import Country from './Country';
import allCountryScores from './scores';

function App() {

  const countries = allCountryScores.sort(
    (a, b) => a.name > b.name ? 1 : -1
  ).slice();

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
      {countries.map((country) => 
        <Country key={country.name} country={country} sortOrder={sort}/>
      )}
    </div>
  );
}

export default App;
