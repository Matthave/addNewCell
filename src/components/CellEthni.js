import React from 'react'

function CellEthni(props) {
  return (
    <div className="ethniOptions__tab">
      <div className="divLine"></div>
      <div className="ethniOptions__element">
        <span className='spanAnd'>Or</span>
        <h3 className="ethniOptions__text">{props.text}</h3>
        <button onClick={() => props.removeCell(props.id)} className="subtractBtn">-</button>
      </div>
    </div>
  )
}

export default CellEthni
