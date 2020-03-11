import React from 'react'

function EthniDefaultOne(props) {
  return (
    <div className="ethniOptions__tab ethniOptions__tab--onPosition">
      <div className="divLine"></div>
      <div className="ethniOptions__element ethniOptions__element--onPosition">
        <span className='spanAnd spanAnd--onPosition'>Or</span>
        <h3 className="ethniOptions__text">Black</h3>
        <button onClick={() => props.removeEthniDefaultCells('defaultOne')} className="subtractBtn"><i className="fas fa-minus"></i></button>
      </div>
    </div>
  )
}

export default EthniDefaultOne
