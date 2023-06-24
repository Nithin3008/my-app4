import logo from './logo.svg';
import './App.css';
import { Home1 } from './Home';
import { Route, Routes } from 'react-router';
import { Comment1 } from './Comment';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home1/>}></Route>
        <Route path='/Comment1/:postid' element={<Comment1/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
