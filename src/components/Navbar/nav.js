import React,{Component} from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';

class Nav extends React.Component{
constructor(){
  super();
  this.state = {
      accessKey : "6eca2acaeff241c3bc34406651511e02",
		  lastRefreshTime : "",
		  news: []
  }
  this.fetchNews = this.fetchNews.bind(this)
}

fetchNews(){
  fetch(`http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=` + this.state.accessKey)
    .then(response => response.json())
    .then(data => {this.setState({news : data['articles'], lastRefreshTime : Date().toLocaleString()})})
    .catch(error => this.setState({ error }));
}

componentDidMount(){
  this.fetchNews();
  setInterval(this.fetchNews, 5000);
}

componentWillUnmount() {
    clearInterval(this.intervalID);
      }

render() {
  return (
    <nav className="navbar">
    <div className="link">
    <NavLink className="home" to="/home">Home</NavLink>
    <Header time={this.state.lastRefreshTime}/>
    <Body content={this.state.news}/>
    </div>
    </nav>
      );
}
}

class Header extends React.Component {
   render() {
      return (
         <div className="header">
            <h2>Top Global News</h2>
			       <p className="date">Last refreshed at {this.props.time}</p>
         </div>
      );
   }
}
class Body extends React.Component {
   render() {
      return (
			<div className="body">
				<ul>
				  {this.props.content.map(item => (
					<li key={item.title}>{item.title}</li>
				  ))}
				</ul>
			</div>
      );
   }
}
export default Nav;
