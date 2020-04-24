import React,{Component} from 'react';
import Header from './components/headercomponent/header';
import Footer from './components/footercomponent/footer';
import Post from './components/post/post';
import Home from './components/home/home';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

class App extends React.Component{
render() {
  return (
    <Router className="App">
    <Header />
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/home" exact component={Home}/>
    <Route path="/post/:postId" exact component={Post}/>
    </Switch>
    <Footer />
    </Router>

  );
}
}
export default App;
