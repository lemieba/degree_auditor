import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default function Course({course, term_number, index}) {
  
    return (
        <Draggable draggableId={course.crs_id} index={index}>
            {(provided) => (
                <div className="grid-item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className="item-content">
                        <div className="item-title">{course.dept} {course.crs_num}</div>
                        <div className="item-title2">{course.crs_name}</div>
                    </div>
                    <div>{course.min_term} {course.term} {course.max_term}</div>
                    <div className="item-credits">{course.credits}<span> </span></div>
                </div>

            )}
        </Draggable>
    );
}