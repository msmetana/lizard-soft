import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
    render() {
        const {
            users,
            showOnlyActiveUsers,
            onSelectUser
         } = this.props;

        return(
            <div className="container-table">
                <div className="container-table__header">
                    {showOnlyActiveUsers ? "Active users" : "All users"}
                    <span className="show-all-link" onClick={this.props.handleShowUsers}>
                        {showOnlyActiveUsers ? "Show all users" : "show active users"}
                    </span>
                </div>
                <div className="container-table__content">
                    <table className="table-form">
                        <tbody>
                            <tr>
                                <th> name </th>
                                <th> email </th>
                                <th> phone </th>
                                <th> friends </th>
                            </tr>
                            {users.map((user, index) => {
                                return(
                                    <tr key={index} onClick={() => onSelectUser(user)}>
                                        <td> {user.name.first + " " + user.name.last} </td>
                                        <td> {user.email} </td>
                                        <td> {user.phone} </td>
                                        <td> {user.friends.length} </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    {users.length < 1 &&
                        <div className="warning">
                            Nothing was found.
                            {showOnlyActiveUsers && " Try to search in all users."}
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Table;
