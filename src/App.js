import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'boxicons';

import GlobalStyle from "./GlobalStyle";
import ProductsPage from "./pages/ProductsPage";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import { DataProvider } from "./context/DataProvider";

function App() {
  return (
    <DataProvider>
    <Router>
       <GlobalStyle/>
       <Switch>
         <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products" exact>
            <ProductsPage />
          </Route>
          <Route path="/product/:id" exact>
            <ProductPage />
          </Route>
      </Switch>
    </Router>
    </DataProvider>
  );
}

export default App;
