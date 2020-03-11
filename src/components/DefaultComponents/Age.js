import React from 'react'

function Age(props) {
  return (
    <div className="main__tab main__tab--onPosition">
      <div className="divLine"></div>
      <div className="main__tabElement">
        <span className='spanAnd'>And</span>
        <div className="main__tabElementText">Age 40+
                <button onClick={() => props.removeDefaultCells('defaultOne')} className="subtractBtn">-</button>
        </div>
      </div>
    </div>
  )
}

export default Age
