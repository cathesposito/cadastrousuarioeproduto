import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import Success from "./pages/Success/Success";
import Users from "./pages/Users/Users";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/success" component={Success} />
        <Route path="/users" component={Users} />
        <Route path="/products" component={Products} />
      </Switch>
    </Router>
  );
}
