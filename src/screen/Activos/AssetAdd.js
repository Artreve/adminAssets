import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import InputForm from "../../components/assetsComponents/InputForm";
import { successAlert } from "../../utils/alertas";
import { createAsset} from "../../api/apiAssets";
function AssetAdd() {
  //Funciones
  const handleChange = (e) => {
    setAsset({ ...asset, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAsset({ ...asset}));
    successAlert(() => navigate("/asset"));
  };

  //Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [asset, setAsset] = useState({
    name: "", 
    type:"", 
    code:"", 
    marca:"", 
    description:"", 
    purchase_date:""
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form className="form" onSubmit={handleSubmit}>
            {<InputForm asset={asset} handleChange={handleChange} />}
            <Link to="/asset" className="btn btn-secondary my-3">
              Cancelar
            </Link>
            <button type="submit" className="btn btn-success my-3 mx-3">
              Crear activo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AssetAdd;
