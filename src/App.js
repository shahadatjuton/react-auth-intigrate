import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className="react-router">
        <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' exact element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/register' element={<Registration></Registration>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
