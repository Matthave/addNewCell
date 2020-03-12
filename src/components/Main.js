import React from 'react'
import Age from './DefaultComponents/Age'
import Ethnicity from './DefaultComponents/Ethnicity'
import DefaultThree from './DefaultComponents/DefaultThree'
import Popup from './Popup'
import EthniPopup from './EthniPopup'
import Cell from './Cell'
import CellEthni from './CellEthni'

let index = 0;
let ethniIndex = 0;

class Main extends React.Component {
  state = {
    popup: false,
    popupInputValue: '',
    ethniPopup: false,
    ethniInputValue: '',
    removeDefaultOne: false,
    removeDefaultTwo: false,
    removeDefaultThree: false,
    cells: [],
    ethniCells: [],
  }



  clickHandlePopup = (id) => {
    const main = document.querySelector('.main')
    const title = document.querySelector('.App__title')
    const logo = document.querySelector('.App__logo')
    if (id === 'show') {
      main.style.filter = 'blur(4px)'
      title.style.filter = 'blur(4px)'
      logo.style.filter = 'blur(4px)'
      document.body.style.overflow = 'hidden'
      this.setState({
        popup: true,
      })
    } else if (id === 'hide') {
      main.style.filter = 'blur(0px)'
      title.style.filter = 'blur(0px)'
      logo.style.filter = 'blur(0px)'
      document.body.style.overflow = 'inherit'
      this.setState({
        popup: false,
        popupInputValue: '',
      })
    }
  }

  clickHandleEthniPopup = (id) => {
    const main = document.querySelector('.main')
    const title = document.querySelector('.App__title')
    const logo = document.querySelector('.App__logo')
    if (id === 'show') {
      main.style.filter = 'blur(4px)'
      title.style.filter = 'blur(4px)'
      logo.style.filter = 'blur(4px)'
      document.body.style.overflow = 'hidden'
      this.setState({
        ethniPopup: true,
      })
    } else if (id === 'hide') {
      main.style.filter = 'blur(0px)'
      title.style.filter = 'blur(0px)'
      logo.style.filter = 'blur(0px)'
      document.body.style.overflow = 'inherit'
      this.setState({
        ethniPopup: false,
        ethniInputValue: '',
      })
    }
  }

  onChangeInput = (event) => {
    event.preventDefault()
    this.setState({
      popupInputValue: event.target.value
    })
  }

  onChangeEthniInput = (event) => {
    event.preventDefault()
    this.setState({
      ethniInputValue: event.target.value
    })
  }

  addCell = (event) => {
    const main = document.querySelector('.main')
    const title = document.querySelector('.App__title')
    const logo = document.querySelector('.App__logo')
    event.preventDefault()
    const { popupInputValue, cells } = this.state
    if (popupInputValue === '' || popupInputValue.length < 2) {
      alert('Invalid cell name! The minimum number of characters is 2 characters')
      return
    } else if (popupInputValue.length > 100) {
      alert(`Invalid cell name! the maximum number of characters is 100 characters. You entered ${popupInputValue.length} characters`)
      return
    }
    cells.push({ id: index, text: popupInputValue })
    index++;
    this.setState({
      popup: false,
      popupInputValue: '',
    })

    main.style.filter = 'blur(0px)'
    title.style.filter = 'blur(0px)'
    logo.style.filter = 'blur(0px)'
    document.body.style.overflow = 'inherit'
    return
  }

  addEthniCell = (event) => {
    const main = document.querySelector('.main')
    const title = document.querySelector('.App__title')
    const logo = document.querySelector('.App__logo')
    const { ethniInputValue, ethniCells } = this.state
    event.preventDefault()
    if (ethniInputValue === '' || ethniInputValue.length < 2) {
      alert('Invalid cell name! The minimum number of characters is 2 characters')
      return
    } else if (ethniInputValue.length > 50) {
      alert(`Invalid cell name! the maximum number of characters is 50 characters. You entered ${ethniInputValue.length} characters`)
      return
    }
    ethniCells.push({ id: ethniIndex, text: ethniInputValue })
    ethniIndex++;
    this.setState({
      ethniPopup: false,
      ethniInputValue: '',
    })

    main.style.filter = 'blur(0px)'
    title.style.filter = 'blur(0px)'
    logo.style.filter = 'blur(0px)'
    document.body.style.overflow = 'inherit'
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

  removeEthniCell = (id) => {
    const currentCells = [...this.state.ethniCells];
    const newCells = currentCells.filter((cell) => (
      cell.id !== id
    ))
    this.setState({
      ethniCells: newCells
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

    const newEthniCell = this.state.ethniCells.map((ele) => (
      <CellEthni
        key={ele.id}
        id={ele.id}
        text={ele.text}
        removeCell={this.removeEthniCell}
      />
    ))

    const { removeDefaultOne, removeDefaultTwo, removeDefaultThree, popup, popupInputValue, ethniPopup, ethniInputValue } = this.state

    return (
      <>
        <main className='main'>
          <div className="main__people">people</div>
          {removeDefaultOne ? null : <Age removeDefaultCells={this.removeDefaultCells} />}
          {removeDefaultTwo ? null :
            <Ethnicity
              removeDefaultCells={this.removeDefaultCells}
              showEthniPopup={this.clickHandleEthniPopup}
              newEthniCell={newEthniCell}
            />}
          {removeDefaultThree ? null : <DefaultThree removeDefaultCells={this.removeDefaultCells} />}

          {newCell}
          <button className="addBtn" onClick={() => this.clickHandlePopup('show')}><i className="fas fa-plus"></i></button>
        </main>
        {popup ? <Popup
          inputValue={popupInputValue}
          hidePopup={this.clickHandlePopup}
          addCell={this.addCell}
          change={this.onChangeInput}
        />
          : null}

        {ethniPopup ? <EthniPopup
          ethniInputValue={ethniInputValue}
          change={this.onChangeEthniInput}
          hidePopup={this.clickHandleEthniPopup}
          addEthniCell={this.addEthniCell}
        /> : null
        }
      </>
    )
  }
}

export default Main
