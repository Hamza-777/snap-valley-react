import React, { useState } from 'react';
import './PostItem.css';

const PostItem = (props) => {
    let [ cls, setCls ] = useState('far fa-heart');

    const handleLikes = (e) => {
        if (cls === 'far fa-heart') {
        setCls('fas fa-heart');
        } else {
        setCls('far fa-heart');
        }
    };

    const handleDblClick = (e) => {
        setCls('fas fa-heart');
    };

    const handleDelete = (e) => {
        props.deletePost(props.post.id);
    }

    return (
        <div className="card">
            {
                props.post.image ? <div className="image"><img src={props.post.image} alt="" onDoubleClick={handleDblClick} /></div> : <div></div>
            }
            <p className="text">{props.post.text}</p>
            <div className="like-remove">
                <i className={cls} id="like" onClick={handleLikes} />
                <i className="far fa-trash-alt" id="delete" onClick={handleDelete}></i>
            </div>
        </div>
    )
}

export default PostItem;
