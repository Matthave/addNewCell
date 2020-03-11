import React from 'react'
import AddButton from './AddButton'
import Tab from './Tab'
import Ethnicity from './Ethnicity'
import SubtractButton from './SubtractButton'

function Main(props) {
  return (
    <main className='main'>
      <div className="main__people">people</div>
      <div className="main__tab">
        <div className="divLine"></div>
        <div className="main__tabElement">
          <span className='spanAnd'>And</span>
          <div className="main__tabElementText">Age 40+
					<SubtractButton />
          </div>
        </div>
      </div>

      <Ethnicity />

      <div className="main__tab">
        <div className="divLine"></div>
        <div className="main__tabElement">
          <span className='spanAnd'>And</span>
          <div className="main__tabElementText">
            Income Yearly 45USD+
						<SubtractButton />
          </div>
        </div>
      </div>
      <AddButton
        showPopup={props.showPopup}
      />
    </main>
  )
}

export default Main
