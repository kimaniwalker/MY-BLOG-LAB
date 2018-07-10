import React, { Component } from 'react';
import { render } from 'react-dom';

class BlogInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
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
        this.setState({ text: value });
    }

    onBtnClick(value) {
        console.log('clicked');
        console.log(this.state.text.value);

    }



    render() {

        if (this.state.hasLoaded) {
            return (
                <div>
                    <h1>{this.state.text}</h1>
                    <input
                        value={this.state.text}
                        onChange={(event) => this.onInputChange(event.target.value)}
                        placeholder="Make Your Blog Post Now" />
                    <button onClick={this.onBtnClick}>Submit</button>
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