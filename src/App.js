import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppState from './context/AppContext/AppState';
import ImagesContainer from './components/Images-container/ImageContainer';

function App() {
  return (
    <AppState>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ImagesContainer category='general' key='world' />} />
          <Route exact path='/mountain' element={<ImagesContainer category='mountain' key='mountain' />} />
          <Route exact path='/beaches' element={<ImagesContainer category='beaches' key='beaches' />} />
          <Route exact path='/food' element={<ImagesContainer category='food' key='food' />} />
          <Route exact path='/birds' element={<ImagesContainer category='birds' key='birds' />} />
          <Route exact path='/search' element={<ImagesContainer category='search' key='search' search={true}/>} />
        </Routes>
      </BrowserRouter>
    </AppState>
  );
}

export default App;
