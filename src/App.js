import React from 'react'
import Audit from './audit/Audit';

import './App.css';
import degree from './degree.json'
console.log(degree);
var degreeObj = degree;

function generateSampleAudit(degree) {
  var audit = {
    terms: [],
  };
  var courses = [];
  for (var i = 0; i < degree.courses.length; i++) {
    courses.push(degree.courses[i]);
  }
  for (var i = 0; i < degree.options.length; i++) {
    courses.push(degree.options[i].course_options[0]);
  }
  var termCourseSize;
  if (courses.length % 8 === 0) {
    termCourseSize = courses.length / 8;
  } else {
    termCourseSize = Math.floor(courses.length / 8);
  }
  var currTerm = [];
  for (var i = 0; i < courses.length; i++) {
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

function App() {
  return (
    <div className="App">
      <div id="app">
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
                    <Audit terms={audit.terms}></Audit>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="wrapper">
        </div>
      </div>
    </div>
  );
}

export default App;
