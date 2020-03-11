import React from 'react'

function ethniDefaultTwo(props) {
  return (
    <div className="ethniOptions__tab">
      <div className="divLine"></div>
      <div className="ethniOptions__element">
        <span className='spanAnd'>Or</span>
        <h3 className="ethniOptions__text">Hispanic</h3>
        <button onClick={() => props.removeEthniDefaultCells('defaultTwo')} className="subtractBtn">-</button>
      </div>
    </div>
  )
}

export default ethniDefaultTwo
