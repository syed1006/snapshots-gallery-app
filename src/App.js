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
          <Route exact path='/' element={<ImagesContainer category='general' key='general' />} />
          <Route exact path='/business' element={<ImagesContainer category='business' key='business' />} />
          <Route exact path='/entertainment' element={<ImagesContainer category='entertainment' key='entertainment' />} />
          <Route exact path='/health' element={<ImagesContainer category='health' key='health' />} />
          <Route exact path='/sports' element={<ImagesContainer category='sports' key='sports' />} />
          <Route exact path='/science' element={<ImagesContainer category='science' key='science' />} />
          <Route exact path='/technology' element={<ImagesContainer category='technology' key='technology' />} />
        </Routes>
      </BrowserRouter>
    </AppState>
  );
}

export default App;
