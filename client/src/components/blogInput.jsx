import React, { Component } from 'react';
import { render } from 'react-dom';

class BlogInput extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return <input placeholder="Thoughts go here"></input>;
    }
}

export default BlogInput;