import './App.css';
import { SearchBar } from './components/SearchBar/SearchBar';
import { SearchResults } from './components/SearchResults/SearchResults';
import { RatingGame } from './components/RatingGame/RatingGame';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <RatingGame />
      <SearchResults />
    </div>
  );
}

export default App;
