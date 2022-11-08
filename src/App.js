import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Section1 } from './Components/Section1';
import { Footer } from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { Section2 } from './Components/Section2';
function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/section1' element={<Section1/>}/> 
        <Route path='/' element={<Home/>}/>
        <Route path='/section2' element={<Section2/>}/>   
      </Routes>     
      
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
