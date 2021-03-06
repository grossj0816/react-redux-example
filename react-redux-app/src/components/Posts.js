import React, { Component } from 'react';
//connect function connects component to redux store which has all
//the data.
import { connect } from 'react-redux';
import {fetchPosts} from './actions/postActions';
import Header from './Header';

class Posts extends Component {
    componentDidMount()
    {
        this.props.fetchPosts();
    }


    componentWillReceiveProps(nextProps)
    {
        if(nextProps.newPost)
        {
            this.props.posts.unshift(nextProps.newPost);
        }
    }


    render() {
        const contactID = 2;
        const postItems = this.props.posts.map(post => {
            
            return (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )
        }
        
        );
        return (
            <div>
               <h1>Post</h1> 
               <p>{postItems}</p>
               <Header contactID={contactID} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});



//(mapping state to properties, action) (the component)
export default connect(mapStateToProps, { fetchPosts })(Posts);