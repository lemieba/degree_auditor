import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../constants'

export default function Course({course, term_number, index, move_course, onDrop}) {

    const ref = useRef(null);
    const [, drop] = useDrop({
        accept: ItemTypes.COURSE,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const dragTerm = item.term_number;
            const hoverIndex = index;
            const hoverTerm = term_number;
            if (dragTerm !== hoverTerm) {
                return
            }
            if (dragIndex === hoverIndex) {
                return
            }

            const hoveredRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            move_course(dragTerm, dragIndex, hoverTerm, hoverIndex);
            item.index = hoverIndex;
            item.term_number = hoverTerm;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.COURSE,
        item: {
            type: ItemTypes.COURSE, ...course,
            index: index,
            term_number: term_number,
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    drag(drop(ref));
    return (
        <div className="grid-item" ref={ref} style={{ opacity: isDragging ? 0 : 1 }}>
            <div className="item-content">
                <div className="item-title">{course.dept} {course.crs_num}</div>
                <div className="item-title2">{course.crs_name}</div>
            </div>
            <div>{course.min_term} {course.max_term}</div>
            <div className="item-credits">{course.credits}<span> </span></div>
        </div>
    );
}