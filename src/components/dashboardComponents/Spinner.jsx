import React from 'react'
import { PuffLoader } from 'react-spinners'

function Spinner() {
  const color = '#FF0000'
  return (
    <div className="page-container" id="spinner">
      <PuffLoader color={color} size='120' />
    </div>
  )
}

export default Spinner
