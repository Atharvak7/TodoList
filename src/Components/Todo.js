import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Todolistcss from '../CSS/Todolistcss.css'
import editIcon from '../Images/editIcon.svg'
import deleteIcon from '../Images/deleteIcon.svg'

export const Todo = (props) => {
    
    const onDelete = (id) => {
        let tempTodo = props.todoList.filter((item) => {if(item.id == id) item.isActive = false; return item;} );
        props.updateTodoList(tempTodo);
    }
    
    const onEdit = (id) => {
        console.log("Edit clicked")
        props.updateShowEditModalValue(true);
    }

    const onCheckboxClick = (e, id) => {
      //  console.log('onCheckboxClick', e, id);
        let tempTodo = props.todoList.filter((item) => {
                if(item.id == id) 
                    item.isCompleted = !item.isCompleted; 
                return item;
            } 
        );
        props.updateTodoList(tempTodo);
    }
    
    return (<div className='todo'>
        <div className='checkBox'>
            <input type="checkbox" checked={props.todo.isCompleted} onChange={(e) => onCheckboxClick(e, props.todo.id)}></input>
            <span className="checkmark"></span>
        </div>
        <h3>{props.todo.text}</h3>
        <img src={editIcon} onClick={() => onEdit(props.todo.id)}></img>
        <img src={deleteIcon} onClick={() => onDelete(props.todo.id)}></img>
    </div>
    
    );

}