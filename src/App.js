import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import OrderReview from "./components/OrderReview/OrderReview";
import Shop from "./components/Shop/Shop";
import "./components/Style.css";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route exact path="/shop">
            <Shop></Shop>
          </Route>
          <Route exact path="/orderreview">
            <OrderReview />
          </Route>
          <Route exact path="/inventory">
            <Inventory />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
