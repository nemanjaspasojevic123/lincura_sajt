import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { About } from './public/components/About';
import { PublicRoute } from './public/PublicRoute';
import { Products } from './public/components/Products';
import { Gallery } from './public/components/Gallery';
import { Reference } from './public/components/Reference';
import { Contact } from './public/components/Contact';
import { Impressions } from './public/components/Impressions';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
    <PublicRoute component={About} exact path="/about" />
    <PublicRoute component={Products} exact path="/products" />
    <PublicRoute component={Gallery} exact path="/gallery" />
    <PublicRoute component={Reference} exact path="/reference" />
    <PublicRoute component={Impressions} exact path="/impressions" />
    <PublicRoute component={Contact} exact path="/contact" />
    <Redirect from="/" to="about" />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
