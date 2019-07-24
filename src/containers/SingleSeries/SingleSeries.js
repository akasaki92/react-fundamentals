import React, { Component } from "react";

class SingleSeries extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <p>Single Series page - iD {this.props.match.params.id}</p>
            </div>
        );
    }
}
export default SingleSeries;