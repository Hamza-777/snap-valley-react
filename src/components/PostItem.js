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

    return (
        <div className="card">
            {
                props.post.image ? <div className="image"><img src={props.post.image} alt="" onDoubleClick={handleDblClick} /></div> : <div></div>
            }
            <p className="text">{props.post.text}</p>
            <i className={cls} onClick={handleLikes} />
        </div>
    )
}

export default PostItem;
