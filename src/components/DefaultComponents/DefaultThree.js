import React from 'react'

function DefaultThree(props) {
  return (
    <div className="main__tab main__tab--onPosition">
      <div className="divLine"></div>
      <div className="main__tabElement main__tabElement--onPosition">
        <span className='spanAnd spanAnd--onPosition'>And</span>
        <div className="main__tabElementText">
          Income Yearly 45USD+
            <button onClick={() => props.removeDefaultCells('defaultThree')} className="subtractBtn"><i className="fas fa-minus"></i></button>
        </div>
      </div>
    </div>
  )
}

export default DefaultThree
