import React from 'react'

function EthniDefaultOne(props) {
  return (
    <div className="ethniOptions__tab">
      <div className="divLine"></div>
      <div className="ethniOptions__element">
        <span className='spanAnd'>Or</span>
        <h3 className="ethniOptions__text">Black</h3>
        <button onClick={() => props.removeEthniDefaultCells('defaultOne')} className="subtractBtn">-</button>
      </div>
    </div>
  )
}

export default EthniDefaultOne
