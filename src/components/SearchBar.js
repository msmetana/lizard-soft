import React, { Component } from 'react';
import './SearchBar.css';
import Dropdown from './Dropdown';

class SearchBar extends Component {
    state = {
        inputFocused: false,
        tagsFilter: false
    }

    handleAddingFilters = () => {
        const prevTagsFilter = this.state.tagsFilter;

        if (prevTagsFilter) {
            this.props.onRemoveTags();
        }
        this.setState({
            tagsFilter: !prevTagsFilter
        });
    }

    handleFocus = () => {
        this.setState({
            inputFocused: true
        });
    }

    handleBlur = () => {
        this.setState({
            inputFocused: false
        });
    }

    render() {
        const {
            value,
            searchList,
            searchType,
            handleSearchType,
            handleSearch,
            handleSelectTag,
            selectedTag,
            tagsList,
            onRemoveOneTag
        } = this.props;

        const activeLabelClass = this.state.inputFocused ? "active-label" : '';
        const activeInputClass = this.state.inputFocused ? "active-input" : '';
        const filterBlockClass = this.state.tagsFilter ? "filter-block" : '';

        return(
            <div className={`container-search ${filterBlockClass}`}>
                <div className="container-search__header">
                    SearchBar
                </div>
                <div className="container-search__content">
                    <Dropdown
                        list={searchList}
                        onSelect={handleSearchType}
                        searchType={searchType}
                        label="Search type"
                        placeholder="Choose search type"
                    />
                    <div className="form-group">
                        <label className={`form-group__label ${activeLabelClass}`}>
                            {value && "Search by " + (searchType || "...")}
                        </label>
                        <div className={`form-group__input ${activeInputClass}`}>
                            <input
                              type="text"
                              onChange={handleSearch}
                              placeholder={"Search by " + (searchType || "...")}
                              value={value}
                              onFocus={this.handleFocus}
                              onBlur={this.handleBlur}
                            />
                        </div>
                        <div className="error-search-type">
                            {!searchType && value && "Choose search type"}
                        </div>
                    </div>
                </div>
                <div className="other-options">
                    <span onClick={this.handleAddingFilters}>
                        {(this.state.tagsFilter ? "remove" : "add") + " filters by tag"}
                    </span>
                </div>
                { this.state.tagsFilter && <div className="search-by-tag-block">
                    <Dropdown
                        list={tagsList}
                        onSelect={handleSelectTag}
                        searchType={selectedTag.slice(-1)[0]}
                        label="Tag"
                        placeholder="Choose tag"
                    />
                    <div className="selected-tags">
                        {selectedTag && selectedTag.map((tag, index) => {
                            return(
                                <span key={index} className="tag-element">
                                    {"  " + tag}
                                    <span className="remove-tag" onClick={() => onRemoveOneTag(tag)}>
                                        X
                                    </span>
                                </span>
                            )
                        })}
                    </div>
                </div> }
            </div>
        )
    }
}

export default SearchBar;
