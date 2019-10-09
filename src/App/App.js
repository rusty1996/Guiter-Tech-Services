import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Homepage from '../Homepage/Homepage';
import Products from '../Products/Products.js';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';


export default function App() {
  return (
    <Router>
      <div>
        <div id='header-main' className='bg-primary'>
          <div id='header-top'>
            <Image src='https://i.postimg.cc/nVBqvL6c/GTS-Logo.png' />
          </div>
          <div id='header-nav mb-0'>
            <Navbar bg='' variant='' expand='lg' className='py-1 mb-0 border-top'>
              <Navbar.Toggle aria-controls='basic-navbar-nav'/>
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto text-light py-1' fill >
                  <Link to='/' className='font-weight-bold text-center text-light'>Home</Link>
                  <Link to='/products' className='font-weight-bold text-center text-light'>Products</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
