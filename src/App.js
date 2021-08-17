import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'boxicons';

import GlobalStyle from "./GlobalStyle";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <Router>
       <GlobalStyle/>
       <Switch>
          <Route path="/products" exact>
            <ProductsPage />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
