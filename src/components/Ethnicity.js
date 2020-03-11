import React from 'react'
import SubtractButton from './SubtractButton'
import AddButton from './AddButton'

function Ethnicity() {
  return (
    <div className="main__tab">
      <div className="divLine"></div>
      <div className="main__tabElement">
        <span className='spanAnd'>And</span>
        <div className="main__tabElementText">
          <section className="ethni">
            <div className="ethni__mainTab">
              Ethnicity
            </div>
            <SubtractButton />
            <div className="ethniOptions">

              <div className="ethniOptions__tab">
                <div className="divLine"></div>
                <div className="ethniOptions__element">
                  <span className='spanAnd'>Or</span>
                  <h3 className="ethniOptions__text">Black</h3>
                  <SubtractButton />
                </div>
              </div>

              <div className="ethniOptions__tab">
                <div className="divLine"></div>
                <div className="ethniOptions__element">
                  <span className='spanAnd'>Or</span>
                  <h3 className="ethniOptions__text">Hispanic</h3>
                  <SubtractButton />
                </div>
              </div>
              <button className="ethni__btn">+</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Ethnicity
