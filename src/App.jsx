import "./App.css";
import Order from "./components/Order";
import Home from "./components/Home";
import Success from "./components/Success";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/order/success">
            <Success />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
