import React from 'react'

function Age(props) {
  return (
    <div className="main__tab main__tab--onPosition">
      <div className="divLine"></div>
      <div className="main__tabElement main__tabElement--onPosition">
        <span className='spanAnd spanAnd--onPosition'>And</span>
        <div className="main__tabElementText">Age 40+
                <button onClick={() => props.removeDefaultCells('defaultOne')} className="subtractBtn"><i className="fas fa-minus"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Age
