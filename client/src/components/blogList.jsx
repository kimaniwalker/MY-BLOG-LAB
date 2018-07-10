import React, { Component } from 'react';
import { render } from 'react-dom';
import BlogInput from './blogInput';

let BlogList = (props) => {

    return (
        <div>
            <BlogInput />
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>

                    <p className="card-text">{props.value}</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </div>
    );

}

export default BlogList;