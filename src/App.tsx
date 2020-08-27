import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogPost from './views/BlogPost';
import NavBar from './components/NavBar';
import Landing from './views/Landing';
import CreateBlogPost from './views/CreateBlogPost';



const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/posts/create" exact component={CreateBlogPost}/>
        <Route path="/posts/:postId"  component={BlogPost}/>
      </Switch>
    </Router>
  );
}

export default App;
