import React from 'react';
import Term from './Term'
import $ from 'jquery';
import 'jquery-ui';
import 'jquery-ui/ui/widgets/sortable';
import 'jquery-ui/ui/disable-selection';

import './audit.css';
import degree from './degree_data/cs.json'


var degreeObj = degree;

function generateSampleAudit(degree) {
  var audit = {
    terms: [],
  };
  var courses = [];
  var i;
  for (i = 0; i < degree.courses.length; i++) {
    courses.push(degree.courses[i]);
  }
  for (i = 0; i < degree.options.length; i++) {
    courses.push(degree.options[i].course_options[0]);
  }
  var termCourseSize;
  if (courses.length % 8 === 0) {
    termCourseSize = courses.length / 8;
  } else {
    termCourseSize = Math.floor(courses.length / 8);
  }
  var currTerm = [];
  for (i = 0; i < courses.length; i++) {
    if (currTerm.length > termCourseSize) {
      audit.terms.push(currTerm);
      currTerm = [];
    }
    currTerm.push(courses[i])
  }
  if (currTerm.length > 0) {
    audit.terms.push(currTerm);
  }
  return audit
}
var audit = generateSampleAudit(degreeObj);

export default class Audit extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        student: "",
        advisor: "",
        terms: audit.terms // term size should be limited to 8 for four years.
      }
    }
    componentDidMount() {
      $(function() {
        $(".holder").sortable({
          connectWith: '.holder'
        });
      });
    }
    render() {
      return (
        <div id="university">
          <div id="page-content">
            <div>
              <div id="unit">
                <div id="unit-header">
                  <div id="unit-name">
                    <h1>BS Computer Science
                    </h1>
                    <h4>Natural Sciences, Mathematics &amp; Business</h4>
                  </div>
                  <div class="header-credits"><span>123 Credit Hours</span></div>
                  <div class="breadcrumbs">Majors <span>BS Computer Science</span>
                   <span>Degree Plan</span></div>
                </div>
                <span id="plans">
                  <div id="plan-tabs">
                  </div>
                  <div class="vue-degree-plan">
                    <div className="grid">
                      {this.state.terms.map((term_courses, index) => {
                        return (<Term key={index} number={index+1} courses={term_courses} />);
                      })}
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
}