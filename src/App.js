import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  let [posts, setPosts] = useState([
    {
      id: 1,
      image:
        'https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270',
      text: 'Hey there I am using whatsapp...😁😁',
    },
    {
      id: 2,
      image:
        'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
      text: 'What a wonderful world....❤🎈',
    },
    {
      id: 3,
      image:
        'https://images.ctfassets.net/hrltx12pl8hq/1d5gYiyEQq5Ry9HjHqldlH/40754c8fdbb55a238d8774801f27d7c6/06-nature_535318603.jpg?fit=fill&w=480&h=270',
      text: 'Shine bright like these twinkling stars 🎇✨',
    },
  ]);

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  }

  const deletePost = (itemID) => {
    setPosts(posts.filter(post => post.id !== itemID));
  }

  return (
    <div className="App">
      <Header />
      <PostForm newPost={addNewPost} />
      <PostList posts={posts} removePost={deletePost} />
    </div>
  );
}

export default App;
