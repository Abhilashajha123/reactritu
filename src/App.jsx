import React, { component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import { Switch,Route,Redirect } from 'react-router-dom';
const App=()=>
{

  return(
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about"  component={About}/>
      <Route path="/services"  component={Services}/>
      <Route path="/contact"  component={Contact}/>
      <Route path="/error"  component={Error}/>
      <Redirect to ="/error"/>
    </Switch>
     
    </>
  )
}
export default App;