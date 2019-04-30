import React from 'react';
import './DetailsPage.css';

const DetailsPage = ({ user, onBack} ) => (
    <div className="container-details-page">
        <div className="container-details-page__header">
            <div className="left-arrow" onClick={onBack}> &larr; </div>
            <div className="title">
                {user.name.first + " " + user.name.last}
            </div>
        </div>
        <div className="container-details-page__content">
            <div className="greeting">
                {user.greeting}
            </div>
            <table className="details-table">
                <tbody>
                    <tr>
                        <td className="round-top-left">name</td>
                        <td className="round-top-right"> {user.name.first + " " + user.name.last}</td>
                    </tr>
                    <tr>
                        <td>id</td>
                        <td> {user._id}</td>
                    </tr>
                    <tr>
                        <td>guid</td>
                        <td>{user.guid}</td>
                    </tr>
                    <tr>
                        <td>isActive</td>
                        <td>{user.isActive.toString()}</td>
                    </tr>
                    <tr>
                        <td>age</td>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <td>company</td>
                        <td>{user.company}</td>
                    </tr>
                    <tr>
                        <td>email</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>phone</td>
                        <td>{user.phone}</td>
                    </tr>
                    <tr>
                        <td>address</td>
                        <td>{user.address}</td>
                    </tr>
                    <tr>
                        <td>registered</td>
                        <td>{user.registered}</td>
                    </tr>
                    <tr>
                        <td>tags</td>
                        <td>{user.tags.join(", ")}</td>
                    </tr>
                    <tr>
                        <td>friends</td>
                        <td>
                            {user.friends.length > 1 && user.friends.map((friend, index) => {
                                return(
                                    friend.name + (index === user.friends.length - 1 ? '.' : ",")
                                )
                            })}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)

export default DetailsPage;
