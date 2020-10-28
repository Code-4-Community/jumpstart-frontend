import React from 'react';
import '../css/CreateBlogPost_HTML.css'; // allows us to use the css from our other file

/***********************************************************************************************/

// JavaScript Lambda Functions: these unique types allow functions to be passed around like data

// boldIt: String -> Void (we take in a string and do something)
// purpose: to bold the heading of the textarea a user is currently typing in
const boldIt = (id: string) => {
  document.getElementById(id)?.setAttribute('style', 'font-weight: bold;');
};

// revert: String -> Void (we take in a string and do something)
// purpose: to normalize the heading of the textarea a user is just clicked out of
const revert = (id: string) => {
  document.getElementById(id)?.setAttribute('style', 'font-weight: normal;');
};

/***********************************************************************************************/

// JavaScript Function: regular old functions that do something

// submitPost: -> Event(we take in a nothing and return an event)
// purpose: alert that we have submitted a post
function submitPost() {
  alert('You have just submitted a post!');
}

// cancelPost: -> Event(we take in a nothing and return an event)
// purpose: alert that we have cancelled a post
function cancelPost() {
  alert('You have just cancelled a post!');
}

/**********************************************************************************************/

// HTML/CSS

const CreateBlogPostHTML: React.FC = () => {
  return (
    <div className="container">
      <div className="blogPost">
        <div>
          <h2 className="headTitle">Create A Blog Post</h2>
        </div>
        <form>
          <label id="title">Title</label>
          <br />
          <textarea
            className="titleAuthor"
            rows={1}
            cols={70}
            onFocus={() => boldIt('title')}
            onBlur={() => revert('title')}
          />
          <br />
          <br />
          <br />
          <label id="author">Author</label>
          <br />
          <textarea
            className="titleAuthor"
            rows={1}
            cols={30}
            onFocus={() => boldIt('author')}
            onBlur={() => revert('author')}
          />
          <br />
          <br />
          <br />
          <label id="content">Content</label>
          <br />
          <textarea
            className="content"
            rows={10}
            cols={100}
            onFocus={() => boldIt('content')}
            onBlur={() => revert('content')}
          />
          <br />
          <br />
          <br />
          <div className="container">
            <button className="endButtons" onClick={cancelPost}>
              Cancel
            </button>
            <input
              type="submit"
              className="endButtons"
              onClick={submitPost}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogPostHTML;
