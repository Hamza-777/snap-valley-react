import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import './PostForm.css';

const PostForm = (props) => {
    let [image, setImage] = useState('');
    let [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            id: uuidv4(),
            image,
            text,
        };
        if (text !== '') {
            props.newPost(newPost);
        }
        setText('');
        setImage('');
    };

    const handleChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    const handleInput = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2 className="para">Tell us something about your day</h2>
                <div className="photo">
                    <label htmlFor="img">Upload an image</label>
                    <input
                        type="file"
                        id="img"
                        name="img"
                        accept="image/*"
                        onChange={handleChange}
                    />
                    {
                        image ? (<div className="preview"><img src={image} alt="" /></div>) : <div></div>
                    }
                </div>
                <textarea
                type="text"
                placeholder="Add some description or share something..."
                onInput={handleInput}
                />
                <button type='submit'>Post</button>
            </form>
        </div>
    )
}

export default PostForm;
