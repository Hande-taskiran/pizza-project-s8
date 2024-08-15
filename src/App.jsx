import "./App.css";
import Order from "./components/Order";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Success from "./components/Success";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/order/success">
            <Success />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
