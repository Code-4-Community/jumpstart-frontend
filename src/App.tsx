import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateBlogPost_HTML from './components/CreateBlogPost_HTML';
import CreateBlogPost from './components/CreatBlogPost';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <CreateBlogPost />
    </div>
  );
}

export default App;
