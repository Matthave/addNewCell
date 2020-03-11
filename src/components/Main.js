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
    const main = document.querySelector('.main')
    const title = document.querySelector('.App__title')
    const logo = document.querySelector('.App__logo')
    if (id === 'show') {
      main.style.filter = 'blur(2px)'
      title.style.filter = 'blur(2px)'
      logo.style.filter = 'blur(2px)'
      this.setState({
        popup: true,
      })
    } else if (id === 'hide') {
      main.style.filter = 'blur(0px)'
      title.style.filter = 'blur(0px)'
      logo.style.filter = 'blur(0px)'
      this.setState({
        popup: false,
        popupInputValue: '',
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
    const main = document.querySelector('.main')
    const title = document.querySelector('.App__title')
    const logo = document.querySelector('.App__logo')
    event.preventDefault()
    if (this.state.popupInputValue === '' || this.state.popupInputValue.length < 2) {
      alert('Invalid cell name! The minimum number of characters is 2 characters')
      return
    } else if (this.state.popupInputValue.length > 100) {
      alert(`Invalid cell name! the maximum number of characters is 100 characters. You entered ${this.state.popupInputValue.length} characters`)
      return
    }
    this.state.cells.push({ id: index, text: this.state.popupInputValue })
    index++;
    this.setState({
      popup: false,
      popupInputValue: '',
    })

    main.style.filter = 'blur(0px)'
    title.style.filter = 'blur(0px)'
    logo.style.filter = 'blur(0px)'
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
      <>
        <main className='main'>
          <div className="main__people">people</div>
          {this.state.removeDefaultOne ? null : <Age removeDefaultCells={this.removeDefaultCells} />}
          {this.state.removeDefaultTwo ? null : <Ethnicity removeDefaultCells={this.removeDefaultCells} />}
          {this.state.removeDefaultThree ? null : <DefaultThree removeDefaultCells={this.removeDefaultCells} />}

          {newCell}
          <button className="addBtn" onClick={() => this.clickHandlePopup('show')}><i className="fas fa-plus"></i></button>
        </main>
        {this.state.popup ? <Popup
          inputValue={this.state.popupInputValue}
          hidePopup={this.clickHandlePopup}
          addCell={this.addCell}
          change={this.onChangeInput}
        />
          : null}
      </>
    )
  }
}

export default Main
