import React, { Component } from 'react';
import { render } from 'react-dom';
import BlogInput from './blogInput';

class BlogList extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BlogInput />
            <div className="card">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
</div>
        );
    }
}

export default BlogList;