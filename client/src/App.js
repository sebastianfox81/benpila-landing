import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Media from './components/Media';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
         <Route exact path='/' element={<Home />}></Route>
         <Route path='/about' element={<About />}></Route>
         <Route path='/media' element={<Media />}></Route>
         <Route path='/gallery' element={<Gallery />}></Route>
         <Route path='/contact' element={<Contact />}></Route>

        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
