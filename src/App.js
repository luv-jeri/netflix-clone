import Home from './pages/Home';
import './App.css';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '00cc4b4770c22d9316433c56df5c5eae',
};

function App() {
  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;
