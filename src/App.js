import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'boxicons';

import GlobalStyle from "./GlobalStyle";
import ProductsPage from "./pages/ProductsPage";
import Home from "./pages/Home";
import { DataProvider } from "./context/DataProvider";
import Cart from "./components/Cart";

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
      </Switch>
    </Router>
    </DataProvider>
  );
}

export default App;
