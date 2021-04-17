import React from 'react';
import Term from './Term'
import $ from 'jquery';
import 'jquery-ui';
import 'jquery-ui/ui/widgets/sortable';
import 'jquery-ui/ui/disable-selection';

import './audit.css';

import courses_data from './degree_data/courses.json';

var cs_crsid = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,29,35,39,45,47,49,51,52,77,79];

var cs_course_list = [];
cs_crsid.forEach(id => {
  cs_course_list.push(courses_data[id]);
});

var terms = [[],[],[],[],[],[],[],[]]
var level = {};

function maxDepth(node, level) {
  if (level[node.crs_id] === undefined) {
    var max_depth = 0;
    var curr_depth = 0;
    node.nearest_prereq.forEach(crs_id => {
      curr_depth = maxDepth(courses_data[crs_id], level);
      if (curr_depth > max_depth) {
        max_depth = curr_depth;
      }
    });
    level[node.crs_id] = max_depth + 1;
    terms[level[node.crs_id] - 1].push(courses_data[node.crs_id]);
    return max_depth + 1;
  } else {
    return level[node.crs_id];
  }
}

cs_course_list.forEach(crs => {
  maxDepth(crs, level);
});
console.log(terms);

export default class Audit extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        student: props.student,
        advisor: props.advisor,
        terms: terms // term size should be limited to 8 for four years.
      }
    }
    componentDidMount() {
      console.log("holder_running");
      $(function() {
        $(".holder").sortable({
          connectWith: '.holder'
        });
      });
    }
    render() {
      return (
        <div className="vue-degree-plan">
          <div className="grid"><br/>
            {this.state.terms.map((term_courses, index) => {
              return (<Term key={index} number={index+1} courses={term_courses} />);
            })}
          </div>
        </div>
      );
    }
}
