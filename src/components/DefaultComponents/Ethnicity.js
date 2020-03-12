import React from 'react'
import EthniDefaultOne from './EthniDefaultOne'
import EthniDefaultTwo from './EthniDefaultTwo'

class Ethnicity extends React.Component {
  state = {
    removeEthniDefaultOne: false,
    removeEthniDefaultTwo: false,
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

  render() {

    const { removeDefaultCells, newEthniCell, showEthniPopup } = this.props

    return (
      <div className="main__tab main__tab--onPosition">
        <div className="divLine"></div>
        <div className="main__tabElement main__tabElement--onPosition">
          <span className='spanAnd spanAnd--onPosition'>And</span>
          <div className="main__tabElementText">
            <section className="ethni">
              <div className="ethni__mainTab">Ethnicity</div>
              <button onClick={() => removeDefaultCells('defaultTwo')} className="subtractBtn"><i className="fas fa-minus"></i></button>

              <div className="ethniOptions">
                {this.state.removeEthniDefaultOne ? null : <EthniDefaultOne removeEthniDefaultCells={this.removeEthniDefaultCells} />}
                {this.state.removeEthniDefaultTwo ? null : <EthniDefaultTwo removeEthniDefaultCells={this.removeEthniDefaultCells} />}
                {newEthniCell}
                <button onClick={() => showEthniPopup('show')} className="ethni__btn">+</button>
              </div>
            </section>
          </div>
        </div>
      </div >
    )
  }
}

export default Ethnicity
