import logo from './logo.svg';
import './App.css';
import AddAlbum from './Components/AddAlbum';
import SearchAlbum from './Components/SearchAlbum';
import DeleteAlbum from './Components/DeleteAlbum';
import ViewAlbum from './Components/ViewAlbum';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<AddAlbum/>}/>
    <Route path='/SearchAlbum' element={<SearchAlbum/>}/>
    <Route path='/DeleteAlbum' element={<DeleteAlbum/>}/>
    <Route path='/ViewAlbum' element={<ViewAlbum/>}/>

  </Routes>
  </BrowserRouter> 
  );
}

export default App;
