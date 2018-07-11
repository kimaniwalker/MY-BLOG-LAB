import React, { Component } from 'react';
import { render } from 'react-dom';

class BlogList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blog: []
        }

    }

    async componentDidMount() {
        try {
            let response = await fetch('/api/blogList');
            let data = await response.json();
            console.log(data);
            this.setState = ({ blog: data });
        } catch (e) {
            console.log(e);
        }


    }


    render() {
        let blogdiv = this.state.blog.map((blog) => {
            return (
                <div key={id}>
                    <h3>{blog.title}</h3>
                    <h5>{blog.content}</h5>
                </div>
            );
        });
        return (

            <div>
                <h1>LOADING....</h1>
                {blogdiv}
            </div>
        )
    }

}


export default BlogList;