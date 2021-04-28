import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import initial_data from './degree_data/initial_data'
import Term from './term'

import './audit.css'

export default function Audit({ student, advisor, course_graph }) {

  var cs_crsid = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '29', '35', '39', '45', '47', '49', '51', '52', '77', '79'];
  
  function populate(degree) {
    const sorted_degree = degree.sort(function (a, b) {
      return initial_data.courses[a].max_term - initial_data.courses[b].max_term
    });
    var visited = []
    sorted_degree.forEach(elem => {
      visited.push(false);
    });
    var newTerms = {}
    for (let i = 0; i < initial_data.termOrder.length; i++) {
      var fid = initial_data.termOrder[i];
      const term = initial_data.terms[fid];

      const newTermCourses = [];
      for (let j = 0; j < initial_data.termOrder.length; j++) {
        const tid = initial_data.termOrder[j];
        if (newTermCourses.length === 4) {
          break
        }
        for (let index = 0; index < sorted_degree.length; index++) {
          const cid = sorted_degree[index];
          if (newTermCourses.length === 4) {
            break
          }
          if (initial_data.courses[cid].min_term === parseInt(tid[5]) && !visited[index]) {
            newTermCourses.push(cid);
            initial_data.courses[cid].term = parseInt(fid[5])
            visited[index] = true;
          }
        }
      }
      const newTerm = {
        ...term,
        courses: newTermCourses,
      }
      newTerms[fid] = newTerm;
    }
    const new_data = {
      ...initial_data,
      terms: newTerms
    }
    return new_data;
  }

  const [initialState, setInitialState] = useState(populate(cs_crsid));

  function move_right(crs, destTermNum, state) {
    if (destTermNum <= crs.term) {
      return;
    } else {
      const startTerm = state.terms['term-' + crs.term.toString()];
      const destTerm = state.terms['term-' + destTermNum.toString()];
  
      const newStartCourseList = startTerm.courses.filter(val => val !== crs.crs_id);
      const newStartTerm = {
        ...startTerm,
        courses: newStartCourseList,
      };
  
      const newDestCourseList = Array.from(destTerm.courses)
      newDestCourseList.push(crs.crs_id)
      const newDestTerm = {
        ...destTerm,
        courses: newDestCourseList,
      }
  
      const newCourse = {
        ...state.courses[crs.crs_id],
        term: destTermNum
      }

      state.courses[newCourse.crs_id] = newCourse
      state.terms[newStartTerm.id] = newStartTerm;
      state.terms[newDestTerm.id] = newDestTerm;

      crs.dependents.forEach(dep_crs_id => {
        move_right(state.courses[dep_crs_id], destTermNum + 1, state)
      });
    }
  }
  
  function move_left(crs, destTermNum, state) {
    if (destTermNum >= crs.term) {
      return;
    } else {
      const startTerm = state.terms['term-' + crs.term.toString()];
      const destTerm = state.terms['term-' + destTermNum.toString()];
  
      const newStartCourseList = startTerm.courses.filter(val => val !== crs.crs_id);
      const newStartTerm = {
        ...startTerm,
        courses: newStartCourseList,
      };
  
      const newDestCourseList = Array.from(destTerm.courses)
      newDestCourseList.push(crs.crs_id)
      const newDestTerm = {
        ...destTerm,
        courses: newDestCourseList,
      }
  
      const newCourse = {
        ...state.courses[crs.crs_id],
        term: destTermNum
      }

      state.courses[newCourse.crs_id] = newCourse
      state.terms[newStartTerm.id] = newStartTerm;
      state.terms[newDestTerm.id] = newDestTerm;

      crs.nearest_prereq.forEach(dep_crs_id => {
        move_left(state.courses[dep_crs_id], destTermNum - 1, state)
      });
    }
  } 

  function onDragStart(start) {
    const start_course = initialState.courses[start.draggableId]
    const min = start_course.min_term;
    const max = start_course.max_term;
    setInitialState({
      ...initialState,
      min: min,
      max: max,
    })

  }

  function onDragEnd(result) {
    setInitialState({
      ...initialState,
      min: null,
      max: null
    });

    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (destination.droppableId === source.droppableId) {
      const term = initialState.terms[source.droppableId];
      const newCourseList = Array.from(term.courses);
      newCourseList.splice(source.index, 1);
      newCourseList.splice(destination.index, 0, draggableId)

      const newTerm = {
        ...term,
        courses: newCourseList,
      };

      const newState = {
        ...initialState,
        terms: {
          ...initialState.terms,
          [newTerm.id]: newTerm
        },
        min: null,
        max: null
      };

      setInitialState(newState);
      return;
    }

    const startTerm = initialState.terms[source.droppableId];
    const destTerm = initialState.terms[destination.droppableId];

    const newStartCourseList = Array.from(startTerm.courses);
    newStartCourseList.splice(source.index, 1);
    const newStartTerm = {
      ...startTerm,
      courses: newStartCourseList,
    };


    const newDestCourseList = Array.from(destTerm.courses)
    newDestCourseList.splice(destination.index, 0, draggableId)
    const newDestTerm = {
      ...destTerm,
      courses: newDestCourseList,
    }

    const newCourse = {
      ...initialState.courses[draggableId],
      term: parseInt(destination.droppableId[5])
    }

    const newState = {
      ...initialState,
      courses: {
        ...initialState.courses,
        [newCourse.crs_id]: newCourse
      },
      terms: {
        ...initialState.terms,
        [newStartTerm.id]: newStartTerm,
        [newDestTerm.id]: newDestTerm
      },
      min: null,
      max: null
    };
    if (destination.droppableId > source.droppableId){
      newState.courses[draggableId].dependents.forEach(deps_crs_id => {
        move_right(newState.courses[deps_crs_id], parseInt(destination.droppableId[5]) + 1, newState);
      });
    } else if (destination.droppableId < source.droppableId){
      newState.courses[draggableId].nearest_prereq.forEach(prereq_crs_id => {
        move_left(newState.courses[prereq_crs_id], parseInt(destination.droppableId[5]) - 1, newState);
      });
    }
    setInitialState(newState);
  }

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
    >
      <div className="vue-degree-plan">
        <div className="grid"><br />
          {initialState.termOrder.map((termId, index) => {
            const isPossible = initialState.min !== null && initialState.max !== null && initialState.min <= index + 1 && index + 1 <= initialState.max ;
            const courses = []
            initialState.terms[termId].courses.forEach((crs_id) => {courses.push(initialState.courses[crs_id])})
            return <Term key={termId} termId={termId} title={initialState.terms[termId].title} courses={courses} isPossible={isPossible}/>
          })}
        </div>
      </div>
    </DragDropContext>
  );
}
