import React, { Component } from 'react';
import { render } from 'react-dom';

class BlogInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            hasLoaded: false
        }
    }

    hasLoaded(e) {
        this.setState = ({
            hasLoaded: !this.state.hasLoaded
        });
    }
    componentDidMount() {
        this.setState({ hasLoaded: true })
    }

    onInputChange(value) {
        this.setState({ title: value });
    }

    onBtnClick(value) {

        fetch('/api/blogList', {
            method:'POST',
            body: JSON.stringify(value),
            headers: new Headers({ 'Content-Type': 'application/json'})
        })

        console.log(value);
        var para = document.createElement("P");                       // Create a <p> element
        var t = document.createTextNode(value);       // Create a text node
        para.appendChild(t);                                          // Append the text to <p>
        document.body.appendChild(para);

    }



    render() {

        if (this.state.hasLoaded) {
            return (
                <div>
                    <h1>{this.state.title}</h1>
                    <input
                        value={this.state.title}
                        onChange={(event) => this.onInputChange(event.target.value)}
                        placeholder="Make Your Blog Post Now" />
                    <button onClick={(event) => this.onBtnClick(this.state.title)}>Submit</button>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>LOADING....</h1>
                    <button onClick={this.onBtnClick}>Submit</button>
                </div>
            )
        }

    }
}

export default BlogInput;