import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// must import containers here
import Home from "./containers/Home";
import Header from "./components/Header";
function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route path="/about" component={About} /> */}
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
export default Routes;
