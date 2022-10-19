import { Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Greeting />} />
  </Routes>
);

export default App;
