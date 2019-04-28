import React, { Component } from 'react';
import './DetailsPage.css';

class DetailsPage extends Component {

    render() {
        return(
            <div className="container-details-page" onClick={this.props.onBack}>
                {this.props.user.tags}
            </div>
        )
    }
}

export default DetailsPage;
