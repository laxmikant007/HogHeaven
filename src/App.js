
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import BestHostel from './pages/BestHostel/BestHostel';
import Contact from './pages/Conteact';
import Home from './pages/Home';

import Facilities from './pages/Our-fecalities';
import Team from './pages/Our-team';
import Testimonials from './pages/Testimonial';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
     <Router>
      <div>
      <Header/>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/facility' element={<Facilities/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/best-hostels' element={<BestHostel/>}/>
      </Routes>
      <Footer/>
    
      </div>
      </Router>
    
  );
}

export default App;
