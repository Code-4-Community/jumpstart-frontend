import React from 'react';
import '../css/HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div id="homePage">
      <div id="navBar">
        <h1 id="title">The Jumpstart Blog</h1>
        <div className="cardBackground">
          <button>
            Home{' '}
            <span role="img" aria-label="home">
              🏠
            </span>
          </button>
          <button>
            Add a Post{' '}
            <span role="img" aria-label="plus">
              ➕
            </span>
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
                <h4 className="postAuthor postFooterText">
                  Written By:{' '}
                  <span className="authorName">Jack Blanc, Dash Master</span>
                </h4>
                <div className="commentsAndClaps">
                  <h4 className="comments postFooterText">
                    100000{' '}
                    <span role="img" aria-label="speech-bubble">
                      💬
                    </span>
                  </h4>
                  <h4 className="claps postFooterText">
                    123456{' '}
                    <span role="img" aria-label="clap">
                      👏
                    </span>
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
                <h4 className="postAuthor postFooterText">
                  Written By:{' '}
                  <span className="authorName">Jack Blanc, Dash Master</span>
                </h4>
                <div className="commentsAndClaps">
                  <h4 className="comments postFooterText">
                    100000{' '}
                    <span role="img" aria-label="speech-bubble">
                      💬
                    </span>
                  </h4>
                  <h4 className="claps postFooterText">
                    123456{' '}
                    <span role="img" aria-label="clap">
                      👏
                    </span>
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
