import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchUsers} from './actions/userActions';

class Users extends Component {
    componentDidMount()
    {
        //call action here
        this.props.fetchUsers();
    }

    componentWillReceiveProps(nextProps)
    {
        if(nextProps.newUser)
        {
            this.props.users.unshift(nextProps.newUser);
        }
    }


    render() {
        //map through user state items
        const userItems = this.props.users.map(user => {
            return (
                <div key={user.id}>
                    <h3>{user.username}</h3>
                    <p>{user.name}</p>
                </div>
            )
        }
        );
        return (
            <div>
                <h1>Users</h1>
                <p>{userItems}</p>
            </div>
        )
    }
}
//We are mapping our initial state to the users props.
//User props are found in  
const mapStateToProps = state => ({
    users: state.users.items,
    newUser: state.users.item
});

export default connect(mapStateToProps, { fetchUsers })(Users);