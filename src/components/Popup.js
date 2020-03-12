import React from 'react'

class Popup extends React.Component {
  state = {
    onPosition: false,
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        onPosition: true,
      })
    }, 50);
  }

  render() {
    const classes = ['popup'];
    if (this.state.onPosition) classes.push('popup--onPosition')

    const { addCell, hidePopup, change, inputValue } = this.props

    return (
      <div className="popupWrap">
        <div className={classes.join(' ')}>
          <form className="popup__form">
            <label htmlFor="">
              Add New Cell
          <input className='popup__input' type="text" value={inputValue} onChange={change} placeholder='Name Cell' />
            </label>
            <button onClick={addCell} className='popup__btn' type='submit'>+</button>
          </form>
          <button onClick={() => hidePopup('hide')} className="escapeBtn">x</button>
        </div>
      </div>
    )
  }
}
export default Popup
