import React from 'react'
// import Form from './audit/Form';
import Audit from './audit/components/Audit';
import './App.css';

import courses_data from './audit/degree_data/courses.json';

var cs_crsid = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,29,35,39,45,47,49,51,52,77,79];
var course_graph = {};
cs_crsid.forEach(id => {
  course_graph[id] = courses_data[id];
});

function App() {
  return (
    <div className="App">
      <div id="app">
        <Audit course_graph={course_graph}></Audit>
      </div>
    </div>
  );
}

export default App;
