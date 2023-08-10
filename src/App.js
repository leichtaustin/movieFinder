import './App.css';
import { SearchBar } from './components/SearchBar/SearchBar';
import { SearchResults } from './components/SearchResults/SearchResults';



const App = () => {
  return (
    <div className="App">
      <SearchBar />
      <SearchResults />
    </div>
  );
}

export default App;
