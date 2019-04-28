import React, { Component } from 'react';
import './Main.css';
import SearchBar from './SearchBar'
import Table from './Table'
import DetailsPage from './DetailsPage'
import friends from '../friends.json';

class Main extends Component {
    state = {
        showActiveUsers: true,
        searchValue: '',
        searchType: '',
        user: '',
        selectedTag: ''
    }

    handleShowActiveUsers = () => {
        const prevShowActiveUsers = this.state.showActiveUsers;
        this.setState({
            showActiveUsers: !prevShowActiveUsers
        });
    }

    handleSearch = (e) => {
        this.setState({
            searchValue: e.target.value
        });
    }

    handleSearchType = (value) => {
        this.setState({
            searchType: value
        });
    }

    handleSelectUser = (user) => {
        this.setState({
            user: user
        });
    }

    handleBack = () => {
        this.setState({
            user: ''
        });
    }

    handleSelectTag = (value) => {
        let tags = this.state.selectedTag;

        if (!(tags.includes(value))) {
            this.setState({
                selectedTag: tags.length < 1 ? [value] : [...tags, value]
            });
        }
    }

    handleRemoveOneTag = (value) => {
        const tags = this.state.selectedTag;
        this.setState({
            selectedTag: tags.filter(function(tag, index) {
                return value !== tag
            })
        });
    }

    handleRemoveTags = () => {
        this.setState({
            selectedTag: '',
        });
    }

    render() {
        const {
            showActiveUsers,
            searchValue,
            searchType,
            user,
            selectedTag
        } = this.state;

        let tags = [];
        // eslint-disable-next-line
        friends.map(function(user, index) {
            // eslint-disable-next-line
            user.tags.map(function(tag) {
                if (!tags.includes(tag)) {
                    tags.push(tag);
                }
            });
        });

        let users = !showActiveUsers ? friends :
            friends.filter(function(user, index){
                return user.isActive
            });

        if (searchValue !== '') {
            const input = searchValue.toLowerCase();
            switch (searchType) {
                case "name":
                    users = users.filter(function(user, index){
                        return user.name.first.concat(" " + user.name.last).toLowerCase().includes(input)
                    });
                    break;
                case "email":
                    users = users.filter(function(user, index){
                        return user.email.toLowerCase().includes(input)
                    });
                    break;
                case "phone":
                    users = users.filter(function(user, index){
                        return user.phone.includes(input)
                    });
                    break;
                case "company":
                    users = users.filter(function(user, index){
                        return user.company.toLowerCase().includes(input)
                    });
                    break;
                default:
            }
        }

        if (selectedTag !== '' && selectedTag.length > 0) {
            let newUsers = [];
            users.forEach(function(user) {
                let equal = true;
                selectedTag.forEach(function(tag) {
                    if (!(user.tags.includes(tag))) {
                        equal = false;
                    }
                });
                if (equal) {
                    newUsers.push(user)
                }
            });
            users = newUsers;
        }

        return(
            <React.Fragment>
                { !user ?
                    <React.Fragment>
                        <SearchBar
                            handleSearch={this.handleSearch}
                            value={searchValue}
                            searchType={this.state.searchType}
                            handleSearchType={this.handleSearchType}
                            searchList={['name', 'email', 'phone', 'company']}
                            handleSelectTag={this.handleSelectTag}
                            selectedTag={this.state.selectedTag}
                            tagsList={tags}
                            onRemoveTags={this.handleRemoveTags}
                            onRemoveOneTag={this.handleRemoveOneTag}
                        />
                        <Table
                            users={users}
                            handleShowUsers={this.handleShowActiveUsers}
                            showOnlyActiveUsers={showActiveUsers}
                            onSelectUser={this.handleSelectUser}
                        />
                    </React.Fragment> :
                    <DetailsPage
                        onBack={this.handleBack}
                        user={user}
                    />
                }
            </React.Fragment>
        )
    }
}

export default Main;
