import EmployedList from "./screen/EmployedList";
import EmployedAdd from "./screen/EmployedAdd";
import EmployedDetail from "./screen/EmployedDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { StrictMode } from 'react';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <StrictMode>
     <NavBar/>
     <Routes>
      <Route path='/' element={<EmployedList/>}/>
      <Route path='create_employed' element={<EmployedAdd/>}/>
      <Route path='detail_employed/:id' element={<EmployedDetail/>}/>
     </Routes>
     </StrictMode>
     </BrowserRouter>
    </div>
  );
}

export default App;
