import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header, Footer } from "components";
import { Product, Home, Contact, ProductsPage } from "pages";

import { ScrollToTop } from "utils";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/products" exact>
          <ProductsPage />
        </Route>
        <Route path="/products/:slug" exact component={Product} />
        <Route path="*" exact>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
