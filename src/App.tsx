import React from 'react';
import NavBar from './components/NavBar';
import Landing from './views/Landing';



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
