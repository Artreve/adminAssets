import Index from "./screen/Employees/Index";
import EmployedAdd from "./screen/Employees/EmployedDetail";
import EmployedDetail from "./screen/Employees/EmployedDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { StrictMode } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StrictMode>
          <NavBar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="create_employed" element={<EmployedAdd />} />
            <Route path="detail_employed/:id" element={<EmployedDetail />} />
          </Routes>
        </StrictMode>
      </BrowserRouter>
    </div>
  );
}

export default App;
