import logo from './logo.svg';
import './App.css';
import Curd from './Components/Curd';
import View from './Components/View';
import { Route, Routes } from 'react-router-dom';
import AddProducts from './Components/AddProducts';
import Edit from './Components/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Curd/>}/>
        <Route path='/:viewid' element={<View/>}/>
        <Route path='edit/:editId' element={<Edit/>}/>
        <Route path='/addProducts' element={<AddProducts/>}/>
      </Routes>
    </div>
  );
}

export default App;
