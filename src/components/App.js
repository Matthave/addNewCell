import React from 'react';
import Main from './Main'
import Popup from './Popup'
import '../css/style.css';

class App extends React.Component {
  state = {
    popup: false,
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

  render() {
    return (
      <div className="App">
        <Main
          showPopup={this.clickHandlePopup}
          popup={this.state.popup}
        />
        {this.state.popup ? <Popup hidePopup={this.clickHandlePopup} /> : null}
      </div>
    );
  }
}

export default App;
