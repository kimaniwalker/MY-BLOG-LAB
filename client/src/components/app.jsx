import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
import GoodbyeWorld from './goodbye';
import BlogInput from './blogInput';
import BlogList from './blogList';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/goodbye">Goodbye</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/bloglist">Blog</Link>
                    <Switch>
                        <Route exact path="/" component={HelloWorld} />
                        <Route path="/goodbye" component={GoodbyeWorld} />
                        <Route path="/blog" component={BlogInput} />
                        <Route path="/bloglist" component={BlogList} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;