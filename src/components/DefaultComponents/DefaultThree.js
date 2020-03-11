import React from 'react'

function DefaultThree(props) {
  return (
    <div className="main__tab main__tab--onPosition">
      <div className="divLine"></div>
      <div className="main__tabElement">
        <span className='spanAnd'>And</span>
        <div className="main__tabElementText">
          Income Yearly 45USD+
            <button onClick={() => props.removeDefaultCells('defaultThree')} className="subtractBtn">-</button>
        </div>
      </div>
    </div>
  )
}

export default DefaultThree
