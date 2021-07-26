import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postUser } from './actions/userActions';



class Userform extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            username: '',
            email: ''
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    onSubmit = (e) => {
        //prevents the browser from refreshing
        e.preventDefault();

        //we will set the values of our inputs here to
        //pass into our action
        const userInfo = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email
        };

        //CALL ACTION
        this.props.postUser(userInfo);
    }

    render() {
        return (
            <div>
                <h1>Add User</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Name: </label>
                        <br/>
                        <input type="text" name="name" onChange={this.onChange} value={this.state.name} />
                    </div>
                    <br />
                    <div>
                        <label>Username: </label>
                        <br/>
                        <input type="text" name="username" onChange={this.onChange} value={this.state.username} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <br/>
                        <input type="text" name="email" onChange={this.onChange} value={this.state.email} />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>    
            </div>
        )
    }
}

//we don't pass a mapStateToProps function since we want the action
//(postUser) to update the state by saving a new user.
export default connect(null, {postUser})(Userform);