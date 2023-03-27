import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch} from "react-redux";
import ErrorMessage from "../../components/common/ErrorMenssage";
import InputForm from "../../components/assetsComponents/InputForm";
import { Link } from "react-router-dom";
import { advertencia } from "../../utils/alertas";
import { getAssetById, updateAssets } from "../../api/apiAssets";
function AssetDetail() {
  //Funciones
  const assetSearch = () => {
     async function getData (){
      const asset = await getAssetById(id)
      setAsset(asset)
    }
    getData()
  };
  const handleChange = (e) => {
    setAsset({ ...asset, [e.target.name]: e.target.value });
  };
  const handleConfirmEdition = () => {
    advertencia(()=>{
      dispatch(updateAssets(asset))
      navigate("/")
    })
  };

  //Hooks
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [asset, setAsset] = useState(null);
  useEffect(assetSearch, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card my-3">
            <div className="card-body">
              {!asset?.idasset && (
                <>
                  <ErrorMessage
                    tittle={"Activo no encontrado"}
                    message={"Ingrese un activo valido"}
                  />
                  <Link to={`/asset`} type="button" className="btn btn-info">
                    volver
                  </Link>
                </>
              )}
              {(asset?.idasset) &&(
                <>
                <InputForm asset={asset} handleChange={handleChange}/>
                <div className="my-3">
                    <Link
                      to="/asset"
                      className="btn btn-secondary"
                    >
                      Cancelar
                    </Link>
                    <button
                      type="button"
                      onClick={handleConfirmEdition}
                      className="btn btn-success mx-3"
                    >
                      Editar
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetDetail;
