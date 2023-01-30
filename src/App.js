import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Works from './Components/Works';
import Tools from './Components/Tools';
import Goals from './Components/Goals';
import Footer from './Components/Footer';
import Resume from './Components/Resume';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    
      <Navbar/>
      <main className='app_main'>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="goals" element={<Goals />} />
       <Route path="works" element={<Works />} />
       <Route path="tools" element={<Tools />} />
       <Route path='resume' element={<Resume/>}/>
      </Routes>
      </main>


      <Footer/>
    
    
  </>
  );
}

export default App;
