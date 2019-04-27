import React, { Component } from 'react';
import './SearchBar.css';
import Dropdown from './Dropdown';

class SearchBar extends Component {

    onChangeSearch = () => {
        this.props.handleSearch();
    }

    render() {
        const {
            value,
            searchList,
            searchType,
            handleSearchType,
            handleSearch
        } = this.props;

        return(
            <div className="container-search">
                <div className="container-search__header">
                    SearchBar
                </div>
                <div className="container-search__content">
                    <Dropdown
                        list={searchList}
                        onSelect={handleSearchType}
                        searchType={searchType}
                    />
                    <div className="form-group">
                        <label className="form-group__label">
                            {value && "Search by " + (searchType || "...")}
                        </label>
                        <div className="form-group__input">
                            <input
                              type="text"
                              onChange={handleSearch}
                              placeholder={"Search by " + (searchType || "...")}
                              value={value}
                            />
                        </div>
                        <div className="error-search-type">
                            {!searchType && value && "Choose search type"}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;
