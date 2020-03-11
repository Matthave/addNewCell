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

    return (
      <div className={classes.join(' ')}>
        <form className="popup__form">
          <label htmlFor="">
            Add New Cell
          <input className='popup__input' type="text" value={this.props.inputValue} onChange={this.props.change} placeholder='Name Cell' />
          </label>
          <button onClick={this.props.addCell} className='popup__btn' type='submit'>+</button>
        </form>
        <button onClick={() => this.props.hidePopup('hide')} className="escapeBtn">x</button>
      </div>
    )
  }
}
export default Popup
