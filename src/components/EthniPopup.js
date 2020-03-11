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

    return (
      <div className={classes.join(' ')}>
        <form className="popup__form">
          <label htmlFor="">
            Add New Cell in Section Ethnicity
          <input className='popup__input' value={this.props.EthniInputValue} onChange={this.props.change} placeholder='Name Cell' />
          </label>
          <button onClick={this.props.addEthniCell} className='popup__btn' type='submit'>+</button>
        </form>
        <button onClick={() => this.props.hidePopup('hide')} className="escapeBtn">x</button>
      </div>
    )
  }
}
export default EthniPopup