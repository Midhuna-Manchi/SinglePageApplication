import React,{useState,useEffect} from 'react';
import './style.css';
import Nav from '../Navbar/nav';
import blogPost from '../../data/blog.json';
import {NavLink} from 'react-router-dom';

const Main=(props)=>{

 const[posts,setPosts]=useState([]);

  useEffect(()=>{
    const posts = blogPost.data;
    setPosts(posts);
  },[posts]);

  return (
    <div className="row">
    <main>
    {
      posts.map(post=>{
        return(

          <div className="row">
            <img className="imageicon" src={require(`../../Images/${post.blogImage}`)} alt="Nature" />
              <div className="blogheader">
              <NavLink key={post.id} to={`/post/${post.id}`}>
                <h1 className="posttitle">{post.blogTitle}</h1>
                </NavLink>
                <span className="postedby">Posted by {post.author}</span>
                <div className="postsummary">
                <p>{post.blogSummary}</p>
              </div>
              </div>
              <span id="date">{post.postedOn}</span>
             </div>

            );
      })
    }
    </main>
    <Nav />
    </div>
      );
}

export default Main;
