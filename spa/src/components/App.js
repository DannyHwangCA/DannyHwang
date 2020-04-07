import React from 'react';
import '../css/App.css';
import Nav from './nav';

class App extends React.Component {

  render () {

    return (
      <div className="master-outer-div">
        <div className="master-inner-div">
          <div className="left-outer-container">
            <div className="left-inner-container">
              <Nav />
            </div>
          </div>
          <div className="right-outer-container">
            <div className="right-inner-container">

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;