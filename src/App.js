import { Route, Routes } from 'react-router-dom';
import { AllProduct } from './Components/Homepage/AllProduct';
import { Home } from './Components/Homepage/Home';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/All Routes' element={ <AllProduct/> }></Route>
       
      </Routes>
    
    </div>
  );
}

export default App;
