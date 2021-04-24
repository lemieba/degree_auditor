import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../constants';
import Course from './Course';


function selectBackgroundColor(isActive, canDrop) {
    if (isActive) {
        return '#83f3a4';
    } else if (canDrop) {
        return '#6cc887';
    } else {
        return '#222';
    }
}
export default function Term({onDrop, term_number, term_list, move_course}) {
    var credits = 0;
    for (var i = 0; i < term_list.length; i++) {
      credits += term_list[i].credits
    }
    
    const [{canDrop, isOver}, drop] = useDrop({
        accept: ItemTypes.COURSE,
        canDrop: (item, monitor) => {
            return parseInt(item.min_term) <= parseInt(term_number) && parseInt(term_number) <= parseInt(item.max_term);
        },
        drop: (item, monitor) => {
            onDrop(item, monitor, term_number)
        },
        collect: (monitor) => ({
            canDrop: monitor.canDrop(),
            isOver: monitor.isOver()
        })
    })

    const isActive = canDrop && isOver;
    const backgroundColor = selectBackgroundColor(isActive, canDrop);
    return(
        <div ref={drop} className="grid-term" >
            <div className="term-title">
                <div>Term {term_number}</div>
            </div>
            <div className="holder" style={{backgroundColor: backgroundColor}}>
                {term_list.map((course, courseIdx) => {
                    return (<Course key={course.crs_id} course={course} move_course={move_course} onDrop={onDrop} term_number={term_number} index={courseIdx} />);
                })}
                
            </div>
            <div className="term-credits">
                <div>{credits} Credits</div>
            </div>
        </div>
    );
}