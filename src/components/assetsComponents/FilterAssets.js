import React from "react";

const FilterAssets= () => {
  return (
    <div className="col-md-6 mb-3">
      <form className="form row" /*onSubmit={handleSubmit}*/>
        <div className="col-4">
          <label className="my-2">Nombre</label>
          <input
            // onChange={handleChange}
            name="name"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            // value={asset.name}
            disabled
          />
        </div>
        <div className="col-4">
          <label className="my-2">Id de empleado</label>
          <input
            // onChange={handleChange}
            name="idemployee"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            // value={asset.idemployee}
            disabled
          />
        </div>
        <div className="col-4 d-flex align-items-center">
          <button type="submit" className="btn btn-success my-3 mx-3" disabled>
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterAssets;
