import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogPost from './components/BlogPost';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import CreateBlogPost from './components/CreatBlogPost';
import CreateComment from './components/CreateComment';



const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <CreateComment />
    </div>
  );
}

export default App;
