import React from 'react'
import EthniPopup from '../EthniPopup'
import CellEthni from '../CellEthni'
import EthniDefaultOne from './EthniDefaultOne'
import EthniDefaultTwo from './EthniDefaultTwo'

let index = 0;

class Ethnicity extends React.Component {
  state = {
    cellsEthni: [],
    ethniPopupInputValue: '',
    ethniPopup: false,
    removeEthniDefaultOne: false,
    removeEthniDefaultTwo: false,
  }

  addEthniCell = (event) => {
    event.preventDefault()
    this.state.cellsEthni.push({ id: index, text: this.state.ethniPopupInputValue })
    index++;
    this.setState({
      ethniPopup: false,
      ethniPopupInputValue: '',
    })
    return
  }

  onChangeInput = (event) => {
    event.preventDefault()
    this.setState({
      ethniPopupInputValue: event.target.value
    })
  }

  clickHandleEthniPopup = (id) => {
    if (id === 'show') {
      this.setState({
        ethniPopup: true,
      })
    } else if (id === 'hide') {
      this.setState({
        ethniPopup: false,
      })
    }
  }

  removeEthniDefaultCells = (id) => {
    if (id === 'defaultOne') {
      this.setState({
        removeEthniDefaultOne: true,
      })
    } else if (id === 'defaultTwo') {
      this.setState({
        removeEthniDefaultTwo: true,
      })
    }
  }

  removeEthniCell = (id) => {
    const currentCells = [...this.state.cellsEthni];
    const newCells = currentCells.filter((cell) => (
      cell.id !== id
    ))
    this.setState({
      cellsEthni: newCells
    })
  }

  render() {
    const newCell = this.state.cellsEthni.map((ele) => (
      <CellEthni
        key={ele.id}
        id={ele.id}
        text={ele.text}
        removeCell={this.removeEthniCell}
      />
    ))

    return (
      <div className="main__tab main__tab--onPosition">
        <div className="divLine"></div>
        <div className="main__tabElement">
          <span className='spanAnd'>And</span>
          <div className="main__tabElementText">
            <section className="ethni">
              <div className="ethni__mainTab">Ethnicity</div>
              <button onClick={() => this.props.removeDefaultCells('defaultTwo')} className="subtractBtn">-</button>

              <div className="ethniOptions">
                {this.state.removeEthniDefaultOne ? null : <EthniDefaultOne removeEthniDefaultCells={this.removeEthniDefaultCells} />}
                {this.state.removeEthniDefaultTwo ? null : <EthniDefaultTwo removeEthniDefaultCells={this.removeEthniDefaultCells} />}
                {newCell}
                <button onClick={() => this.clickHandleEthniPopup('show')} className="ethni__btn">+</button>
              </div>
            </section>
          </div>
        </div>

        {this.state.ethniPopup ? <EthniPopup
          hidePopup={this.clickHandleEthniPopup}
          ethniInputValue={this.state.ethniPopupInputValue}
          change={this.onChangeInput}
          addEthniCell={this.addEthniCell}
        /> : null}
      </div>
    )
  }
}

export default Ethnicity
