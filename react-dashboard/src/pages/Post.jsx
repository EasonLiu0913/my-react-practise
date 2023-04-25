import React from 'react';

const Post = (props) => {
    const { title, body } = props.post;

    return (
        <div className="grid-item p-3 ">
            <div className="border border-cyan-500 rounded p-3">
                <h2 className="font-bold mb-4">{title}</h2>
                <p className="">{body}</p>
            </div>
        </div>
    );
};

export default Post;
