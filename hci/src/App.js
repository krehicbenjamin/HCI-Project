import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/footer"
import Card from "./Components/Card/Card"
import Sidecard from "./Components/Sidecard/Sidecard"
import image from "./Images/pepsi.jpeg"
import Home from "./views/Home"
import Category from "./views/Category"
import Article from "./views/Article"
import Login from "./views/Login"
import Register from "./views/Register"
import './App.css'
function App() {
  return (
    <Router>
<div className="App">
      <Navbar />
      <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/category1'>
              <Category />
            </Route>
            <Route path='/category2'>
              <Category />
            </Route>
            <Route path='/category3'>
              <Category />
            </Route>
            <Route path='/article'>
              <Article />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
          </Switch>
        
        </div>
      <Footer />
    </div>
    </Router>
    
  );
}

export default App;
