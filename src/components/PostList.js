import React from 'react';
import './PostList.css';
import PostItem from './PostItem';

const PostList = (props) => {

    const erasePost = (itemID) => {
        props.removePost(itemID);
    }

    return (
        <div className='container'>
            {
                props.posts.length ? props.posts.map(post => <PostItem post={post} key={post.id} deletePost={erasePost} />) : <p>Currently there are no posts to show</p>
            }
        </div>
    )
}

export default PostList;
