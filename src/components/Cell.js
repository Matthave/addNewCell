import React from 'react'

class Cell extends React.Component {
  state = {
    onPosition: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        onPosition: true,
      })
    }, 100);
  }

  render() {
    const classes = ['main__tab'];
    if (this.state.onPosition) classes.push('main__tab--onPosition')

    const classesElemment = ['main__tabElement'];
    if (this.state.onPosition) classesElemment.push('main__tabElement--onPosition')
    const classesSpanAnd = ['spanAnd']
    if (this.state.onPosition) classesSpanAnd.push('spanAnd--onPosition')

    const { removeCell, text, id } = this.props
    return (
      <div className={classes.join(' ')}>
        <div className="divLine"></div>
        <div className={classesElemment.join(' ')}>
          <span className={classesSpanAnd.join(' ')}>And</span>
          <div className="main__tabElementText">
            <h3 className="main__tabElementTxt">{text}</h3>
            <button onClick={() => removeCell(id)} className="subtractBtn"><i className="fas fa-minus"></i></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Cell
