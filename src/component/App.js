import React, { Component } from "react";
import Screen from "../container/screen";
import ButtonList from "../container/buttonList";
//import History from '../container/History'
class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <h3 className="mt-4">
            <i className="fa fa-calculator" />
            Calculator Recat Redux
          </h3>
        </div>
        <div className="col-sm-8">
          <Screen />
        </div>
        <div className="col-sm-8">
          <h5>Button</h5>
          <ButtonList />
        </div>
        <div className="col-sm-4">
          <History />
        </div>
      </div>
    );
  }
}
export default App;
