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

    return (
      <div className={classes.join(' ')}>
        <div className="divLine"></div>
        <div className="main__tabElement">
          <span className='spanAnd'>And</span>
          <div className="main__tabElementText">{this.props.text}
            <button onClick={() => this.props.removeCell(this.props.id)} className="subtractBtn">-</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Cell
