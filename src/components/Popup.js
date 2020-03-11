import React from 'react'

function Popup(props) {
  return (
    <div className='popup'>
      <form className="popup__form">
        <label htmlFor="">
          Add New Cell
          <input className='popup__input' type="text" placeholder='Name Cell' />
        </label>
        <button className='popup__btn' type='submit'>+</button>
      </form>
      <button onClick={() => props.hidePopup('hide')} className="escapeBtn">x</button>
    </div>
  )
}

export default Popup
