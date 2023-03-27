import EmployeePrincipal from "./screen/Employees/EmployeePrincipal";
import EmployedAdd from "./screen/Employees/EmployedAdd";
import EmployedDetail from "./screen/Employees/EmployedDetail";
import AssetPrincipal from "./screen/Activos/AssetPrincipal"
import AssetAdd from "./screen/Activos/AssetAdd";
import AssetDetail from "./screen/Activos/AssetDetail";
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
            <Route path="/" element={<EmployeePrincipal />} />
            <Route path="/create_employed" element={<EmployedAdd />} />
            <Route path="detail_employed/:id" element={<EmployedDetail />} />
            <Route path="/asset" element={<AssetPrincipal/>} />
            <Route path="/asset/create_asset" element={<AssetAdd/>} />
            <Route path="detail_asset/:id" element={<AssetDetail/>} />
          </Routes>
        </StrictMode>
      </BrowserRouter>
    </div>
  );
}

export default App;
