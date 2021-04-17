import React from 'react';

import Course from './Course';

export default class Term extends React.Component {
    constructor(props) {
        super(props);
        var total_credits = 0;
        for (var i = 0; i < props.courses.length; i++) {
          total_credits += props.courses[i].credits
        }
        this.state = {
        number: props.number,
        courses: props.courses,
        credits: total_credits
        }

    }
    render() {
        return(
            <div className="grid-term">
            <div className="term-title">
                <div>Term {this.state.number}</div>
            </div>
            <div className="holder">
                {this.state.courses.map((course, courseIdx) => {
                return (
                    <Course key={courseIdx} dept={course.dept} crs_id={course.crs_id} crs_name={course.crs_name} credits={course.credits} />
                );
                })}
            </div>
            <div className="term-credits">
                <div>{this.state.credits} Credits</div>
            </div>
            </div>
        );
    }
}
