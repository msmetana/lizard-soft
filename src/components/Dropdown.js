import React, { Component } from 'react';
import './Dropdown.css';
import iconDown from '../chevron-down.svg';
import iconUp from '../chevron-up.svg';

class Dropdown extends Component {
    state = {
        isOpen: false
    };

    handleOpenDropdown = () => {
        const prevIsOpen = this.state.isOpen;
        this.setState({
            isOpen: !prevIsOpen
        });
    }

    handleSelect = (value) => {
        this.props.onSelect(value);
        this.setState({
            isOpen: false
        });
    }

    // var res = str1.concat(str2);
    render() {
        const {
            searchType,
            list
        } = this.props;

        return (
            <div className="dropdown">
                <div className="dropdown__title" onClick={this.handleOpenDropdown}>
                    <div className="dropdown__header-field">
                        {searchType || "Choose search type"}
                    </div>
                    <div className="dropdown-icon">
                        <img src={this.state.isOpen ? iconUp : iconDown} alt="" />
                    </div>
                </div>
                { this.state.isOpen && <div className="dropdown__list">
                    <ul>
                        {list.map((value, index) => {
                            return(
                                <li className="list-item" key={index} onClick={() => this.handleSelect(value)}>
                                    {value}
                                </li>
                            )
                        })}
                    </ul>
                </div> }
            </div>
        );
    }
}

export default Dropdown
