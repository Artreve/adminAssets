import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAssetss, deleteAsset } from "../../api/apiAssets";
import { setPageAction } from "../../features/activos/assetSlice";
import { Assets } from "./AssetList";
import { Loading } from "../../components/common/Loading";
import { advertencia } from "../../utils/alertas";
function AssetPrincipal() {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.asset.assets);
  const currentPage = useSelector((state) => state.asset.currentPage);
  const loading = useSelector((state) => state.asset.loading);
  const handleDelete = (id) => {
    advertencia(() => dispatch(deleteAsset(id)));
  };
  const handleGetForPage = (e, page) => {
    e.preventDefault();
    dispatch(setPageAction(page));
  };

  useEffect(() => {
    dispatch(getAssetss(currentPage));
  }, [dispatch, currentPage]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 col-md-4 mt-3">
          <Link
            to="asset/create_employed"
            type="button"
            className={`btn btn-success fw-bold mx-2 ${
              loading ? "disabled" : ""
            }`}
          >
            Crear nuevo activo
          </Link>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        {loading ? (
          <Loading />
        ) : (
          <Assets
            asset={assets}
            onDelete={handleDelete}
            onGetPage={handleGetForPage}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
}

export default AssetPrincipal;
