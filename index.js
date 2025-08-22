import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional, remove if not using

function PostPage() {
  const [postType, setPostType] = useState('article');
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    articleText: '',
    tags: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>New Post</h2>

      <div>
        <label>
          <input
            type="radio"
            value="question"
            checked={postType === 'question'}
            onChange={() => setPostType('question')}
          /> Question
        </label>
        <label style={{ marginLeft: '10px' }}>
          <input
            type="radio"
            value="article"
            checked={postType === 'article'}
            onChange={() => setPostType('article')}
          /> Article
        </label>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>What do you want to ask or share</h3>
        <p>This section is designed based on the type of the post.</p>

        {postType === 'article' && (
          <>
            <input
              type="text"
              placeholder="Enter a descriptive title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              style={{ width: '100%', marginBottom: '10px' }}
            />
            <textarea
              placeholder="Enter a 1-paragraph abstract"
              name="abstract"
              value={formData.abstract}
              onChange={handleChange}
              style={{ width: '100%', height: '60px', marginBottom: '10px' }}
            />
            <textarea
              placeholder="Enter a 1-paragraph article"
              name="articleText"
              value={formData.articleText}
              onChange={handleChange}
              style={{ width: '100%', height: '100px', marginBottom: '10px' }}
            />
            <input
              type="text"
              placeholder="Add up to 3 tags e.g., Java"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              style={{ width: '100%', marginBottom: '10px' }}
            />
          </>
        )}
      </div>

      <button>Post</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PostPage />
  </React.StrictMode>
);
