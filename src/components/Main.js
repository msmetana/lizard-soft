import React, { Component } from 'react';
import './Main.css';
import SearchBar from './SearchBar'
import Table from './Table'
import friends from '../friends.json';

class Main extends Component {
    state = {
        showActiveUsers: true
    }

    handleShowActiveUsers = () => {
        const prevShowActiveUsers = this.state.showActiveUsers;
        this.setState({
            showActiveUsers: !prevShowActiveUsers
        });
    }

    render() {

        const users = !this.state.showActiveUsers ? friends :
            friends.filter(function(user, index){
                return user.isActive
            });

        console.log(users.length);
        return(
            <React.Fragment>
                <SearchBar />
                <Table
                    users={users}
                    handleShowUsers={this.handleShowActiveUsers}
                    title={this.state.showActiveUsers ? "Active users" : "All users"}
                    buttonName={this.state.showActiveUsers ? "Show all users" : "show active users"}
                />
            </React.Fragment>
        )
    }
}

export default Main;
