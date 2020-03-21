import React from 'react';

export default class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        dept: props.dept,
        crs_id: props.crs_id,
        crs_name: props.crs_name,
        credits: props.credits
        }
    }
    render() {
        return (
        <div className="grid-item">
            <div className="item-content">
            <div className="item-title">{this.state.dept} {this.state.crs_id}</div>
            <div className="item-title2">{this.state.crs_name}</div>
            </div>
            <div className="item-credits">
            {this.state.credits}<span> </span>
            </div>
        </div>
        );
    }
}