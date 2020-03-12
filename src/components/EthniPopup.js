import React from 'react'

class EthniPopup extends React.Component {
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

    const { addEthniCell, ethniInputValue, change, hidePopup } = this.props

    return (
      <div className="popupWrap">
        <div className={classes.join(' ')}>
          <form className="popup__form">
            <label htmlFor="">
              Add New Cell in Section Ethnicity
          <input className='popup__input' value={ethniInputValue} onChange={change} placeholder='Name Cell' />
            </label>
            <button onClick={addEthniCell} className='popup__btn' type='submit'>+</button>
          </form>
          <button onClick={() => hidePopup('hide')} className="escapeBtn">x</button>
        </div>
      </div>
    )
  }
}
export default EthniPopup