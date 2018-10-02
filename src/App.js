import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import Home from "./containers/Home/index";
import TvShowDetails from "./containers/TvShowDetails/index";
import NotFound from "./common/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/details/:id" component={TvShowDetails} />
                <Route component={NotFound} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
