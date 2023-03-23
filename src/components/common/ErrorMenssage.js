import React from 'react'

function ErrorMessage({tittle, message}) {
  return (
    <>
    <div className="card text-bg-danger my-3">
          <div className="card-body">
            <h1 className="card-title">{tittle}</h1>
            <h5>{message}</h5>
          </div>
        </div>
    </>
  )
}

export default ErrorMessage