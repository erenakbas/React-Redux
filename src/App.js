import React, { Component } from 'react'; 
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import {Route} from 'react-router-dom';  
import {Container} from 'semantic-ui-react';
  
import MoviesPage from './components/pages/MoviesPage';
import NewMoviePage from './components/pages/NewMoviePage';
import Footer from './components/pages/Footer';
import Header from './components/pages/Header';
class App extends Component {

  render() {
  
    return (
      <div className="App">  
        <Header/>

        <Container text>   
        <Route exact path="/movies" component={MoviesPage}></Route> 
        <Route exact path="/movies/new" component={NewMoviePage}></Route> 
        <Route exact path="/movie/:id" component={NewMoviePage}></Route> 
        </Container> 
        <Footer/>
      </div>
    );
  }
}

export default App;
