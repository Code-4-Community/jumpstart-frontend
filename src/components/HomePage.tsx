import React from 'react';
import '../css/HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div id="homePage">
      <div id="navBar">
        <h1>The Jumpstart Blog</h1>
        <div className="cardBackground">
          <button>
            Home <span role="img">🏠</span>
          </button>
          <button>
            Add a Post <span role="img"> ➕</span>
          </button>
        </div>
      </div>
      <div id="homeComponents">
        <div className="welcomeMessage cardBackground">
          <h2>Welcome to the C4C Jumpstart Blog!</h2>
          <p>
            Feel free to check out the recent posts and contribute to our post
            collection.
          </p>
        </div>
        <div id="postBox">
          <div id="postColumn">
            <div className="post">
              <h3 className="postTitle">A Pretty Good Title Here</h3>
              <p>
                A short preview of what the blog piece is about. This should
                probably be about two or three sentences that take up at most
                three lines.
              </p>
              <div className="postFooter">
                <h4 className="postAuthor">
                  Written By:{' '}
                  <span className="authorName">Jack Blanc, Dash Master</span>
                </h4>
                <div className="commentsAndClaps">
                  <h4 className="comments">
                    100000 <span role="img">💬</span>
                  </h4>
                  <h4 className="claps">
                    123456 <span role="img">👏</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="post">
              <h3 className="postTitle">A Pretty Good Title Here</h3>
              <p>
                A short preview of what the blog piece is about. This should
                probably be about two or three sentences that take up at most
                three lines.
              </p>
              <div className="postFooter">
                <h4 className="postAuthor">
                  Written By:{' '}
                  <span className="authorName">Jack Blanc, Dash Master</span>
                </h4>
                <div className="commentsAndClaps">
                  <h4 className="comments">
                    100000 <span role="img">💬</span>
                  </h4>
                  <h4 className="claps">
                    123456 <span role="img">👏</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
