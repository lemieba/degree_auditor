import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';

import Term from './Term'

import '../audit.css'
function create_terms(course_graph) {
  var terms = [[], [], [], [], [], [], [], []];
  for (const key in course_graph) {
    if (Object.hasOwnProperty.call(course_graph, key)) {
      const crs = course_graph[key];
      terms[crs.term-1].push(crs);
    }
  }
  return terms;
}

function move_right(crs, destTermNum, course_graph) {
  if (destTermNum <= crs.term) {
    return;
  } else {
    course_graph[crs.crs_id].term = destTermNum;
    crs.dependents.forEach(dep_crs_id => {
      move_right(course_graph[dep_crs_id], destTermNum + 1, course_graph)
    });
  }
}

function move_left(crs, destTermNum, course_graph) {
  if (destTermNum >= crs.term) {
    return;
  } else {
    course_graph[crs.crs_id].term = destTermNum;
    crs.nearest_prereq.forEach(dep_crs_id => {
      move_left(course_graph[dep_crs_id], destTermNum - 1, course_graph)
    });
  }
} 
export default function Audit({ student, advisor, course_graph }) {

  const [courseTerms, setCourseTerms] = useState(create_terms(course_graph));

  const onDrop = (course, monitor, dest_term_num) => {
    console.log("move", course, dest_term_num);
    console.log("before", course_graph)

    if (dest_term_num > course.term) {
      move_right(course, dest_term_num, course_graph);
    } else if (dest_term_num < course.term) {
      move_left(course, dest_term_num, course_graph);
    }
    setCourseTerms(() => {
      
      return [...create_terms(course_graph)];
    });
  }

  const move_course = (dragTerm, dragIndex, hoverTerm, hoverIndex) => {
    console.log("moving", dragTerm, dragIndex, hoverTerm, hoverIndex);
    const course = courseTerms[dragTerm - 1][dragIndex];
    setCourseTerms(prevState => {
      const newCourseTerms = []
      prevState.forEach((term, tidx) => {
        let newTermList = []
        term.forEach((course, cidx) => {
          if (cidx === dragIndex && tidx === dragTerm - 1){
          }else {
            newTermList.push(course);
          }
        });
        newCourseTerms.push(newTermList)
      });
      
      newCourseTerms[hoverTerm - 1].splice(hoverIndex, 0, course);
      return [...newCourseTerms];
    });
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="vue-degree-plan">
        <div className="grid"><br />
          {courseTerms.map((term_list, index) => {
            return <Term key={index} term_number={index + 1} term_list={term_list} move_course={move_course} onDrop={onDrop} />
          })}
        </div>
      </div>
    </DndProvider>
  );
}
