import React from 'react'
import Age from './DefaultComponents/Age'
import Ethnicity from './DefaultComponents/Ethnicity'
import DefaultThree from './DefaultComponents/DefaultThree'
import Popup from './Popup'
import Cell from './Cell'

let index = 0;

class Main extends React.Component {
  state = {
    popup: false,
    popupInputValue: '',
    removeDefaultOne: false,
    removeDefaultTwo: false,
    removeDefaultThree: false,
    cells: [],
  }

  clickHandlePopup = (id) => {
    if (id === 'show') {
      this.setState({
        popup: true,
      })
    } else if (id === 'hide') {
      this.setState({
        popup: false,
      })
    }
  }

  onChangeInput = (event) => {
    event.preventDefault()
    this.setState({
      popupInputValue: event.target.value
    })
  }

  addCell = (event) => {
    event.preventDefault()
    if (this.state.popupInputValue === '' || this.state.popupInputValue.length < 2) {
      alert('Invalid cell name!')
      return
    }
    this.state.cells.push({ id: index, text: this.state.popupInputValue })
    index++;
    this.setState({
      popup: false,
      popupInputValue: '',
    })
    return
  }

  removeDefaultCells = (id) => {
    if (id === 'defaultOne') {
      this.setState({
        removeDefaultOne: true,
      })
    } else if (id === 'defaultTwo') {
      this.setState({
        removeDefaultTwo: true,
      })
    } else if (id === 'defaultThree') {
      this.setState({
        removeDefaultThree: true,
      })
    }
  }

  removeCell = (id) => {
    const currentCells = [...this.state.cells];
    const newCells = currentCells.filter((cell) => (
      cell.id !== id
    ))
    this.setState({
      cells: newCells
    })
  }

  render() {
    const newCell = this.state.cells.map((ele) => (
      <Cell
        key={ele.id}
        id={ele.id}
        text={ele.text}
        removeCell={this.removeCell}
      />
    ))

    return (
      <main className='main'>
        <div className="main__people">people</div>
        {this.state.removeDefaultOne ? null : <Age removeDefaultCells={this.removeDefaultCells} />}
        {this.state.removeDefaultTwo ? null : <Ethnicity removeDefaultCells={this.removeDefaultCells} />}
        {this.state.removeDefaultThree ? null : <DefaultThree removeDefaultCells={this.removeDefaultCells} />}

        {newCell}
        <button className="addBtn" onClick={() => this.clickHandlePopup('show')}>+</button>

        {this.state.popup ? <Popup
          inputValue={this.state.popupInputValue}
          hidePopup={this.clickHandlePopup}
          addCell={this.addCell}
          change={this.onChangeInput}
        />
          : null}
      </main>
    )
  }
}

export default Main
