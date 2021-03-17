import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/menu";
import Routers from "./routers";
class App extends Component {
  render() {
    return (
      <Router>
        {/* Menu */}
        <Menu />
        <div className="container">
          {/* Noi dung */}
          <Switch>{this.showRouters(Routers)}</Switch>
        </div>
      </Router>
    );
  }
  showRouters = (Routers) => {
    var results = null;
    if (Routers.length > 0) {
     results = Routers.map((router, index) => {
          return (
               <Route key={index} exact={router.exact} path={router.path} component={router.main} />
          )
     })
    }
    return results;
  };
}

export default App;
