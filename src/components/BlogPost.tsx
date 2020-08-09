import React from 'react';
import '../css/BlogPost.css';

const BlogPost: React.FC = () => {
  return (
    <div className="container">
      <div className="blogpost">
        <h2 className="title">Create A Blog Post</h2>
        <form>
          <label>Title</label>
          <br />
          <textarea className="textArea"></textarea>
          <br />
          <label>Author</label>
          <br />
          <textarea className="textArea"></textarea>
          <br />
          <label>Content</label>
          <br />
          <textarea className="textArea"></textarea>
          <br /> <br />
          <input type="submit"></input>
          <button>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default BlogPost;
