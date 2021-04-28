import React from 'react';
import Course from './course';
import { Droppable } from 'react-beautiful-dnd';

export default function Term({ termId, title, courses, isPossible}) {
    var credits = 0;
    for (var i = 0; i < courses.length; i++) {
      credits += courses[i].credits
    }
    return(
        <div className="grid-term" >
            <div className="term-title">
                <div>{title}</div>
            </div>
            <Droppable 
                droppableId={termId}
                isDropDisabled={!isPossible}
            >
                {provided => (
                    <div className="holder"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        style={{backgroundColor: isPossible ? '#cce3de': 'inherit'}}
                    >
                        {courses.map((course, courseIdx) => {
                            return (<Course key={course.crs_id} course={course} index={courseIdx} />);
                        })}
                        {provided.placeholder}
                    </div>
                )}
                
            </Droppable>
            <div className="term-credits">
                <div>{credits} Credits</div>
            </div>
        </div>
    );
}