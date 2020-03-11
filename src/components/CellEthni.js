import React from 'react'

class CellEthni extends React.Component {
  state = {
    newCellOnPosition: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        newCellOnPosition: true,
      })
    }, 100);
  }

  render() {
    const classesCell = ['ethniOptions__tab'];
    if (this.state.newCellOnPosition) classesCell.push('ethniOptions__tab--onPosition')

    const classesElement = ['ethniOptions__element']
    if (this.state.newCellOnPosition) classesElement.push('ethniOptions__element--onPosition')

    const classesSpanOr = ['spanAnd']
    if (this.state.newCellOnPosition) classesSpanOr.push('spanAnd--onPosition')

    return (
      <div className={classesCell.join(' ')}>
        <div className="divLine"></div>
        <div className={classesElement.join(' ')}>
          <span className={classesSpanOr.join(' ')}>Or</span>
          <h3 className="ethniOptions__text">{this.props.text}</h3>
          <button onClick={() => this.props.removeCell(this.props.id)} className="subtractBtn">-</button>
        </div>
      </div>
    )
  }
}

export default CellEthni
