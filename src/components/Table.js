import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
    render() {
        const {
            users,
            title,
            buttonName
         } = this.props;

        return(
            <div className="container-table">
                <div className="container-table__header">
                    {title}
                    <span className="show-all-link" onClick={this.props.handleShowUsers}>
                        {buttonName}
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
                                    <tr key={index}>
                                        <td> {user.name.first + " " + user.name.last} </td>
                                        <td> {user.email} </td>
                                        <td> {user.phone} </td>
                                        <td> {user.friends.length} </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Table;
