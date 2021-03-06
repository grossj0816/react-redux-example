import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createPost} from './actions/postActions';

class Postform extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            title: '',
            body: ''
        };

    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };

        //CALL ACTION
        this.props.createPost(post)
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label>
                        <br/>
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <br />
                    <div>
                        <label>Body: </label>
                        <br/>
                        <input type="textarea" name="body" onChange={this.onChange} value={this.state.body} />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>    
            </div>
        )
    }
}

export default connect(null, {createPost})(Postform);