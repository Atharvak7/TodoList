import React from 'react';
import { useState, useEffect, useRef } from 'react';
import filterIcon from '../Images/filterIcon.svg'
import Todolistcss from '../CSS/Todolistcss.css'
import {Todo} from './Todo'
import { EditModal } from './EditModal';
import { Button } from 'bootstrap';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
export const Todolist = () => {
    const [todoList, setTodoList] = useState([{
        id: Math.random(),
        isCompleted: false,
        text: 'Meditate',
        isActive: true,
        isDirty: false,
        isSearchGood: true,
        isFilterGood: true
    }]);
    const [showEditModal, setShowEditModal] = useState(false);
    
    const onSearchFilterChange = (event) => {
      //  console.log("onSearchFilterChange: ", event);

        let tempTodoList = todoList.filter((item) => {  
                if(item.text.toLowerCase().includes(event.target.value.toLowerCase()) || event.target.value === '')
                    item.isSearchGood = true; 
                else
                    item.isSearchGood = false; 
                return item;
            } 
        );
        
        setTodoList(tempTodoList);
    }
    
    const onFilterSelect = (e) => {
        console.log("onFilterSelect: ",todoList,  e.target.checked);
        let showCompletedOnly = e.target.checked;
        let tempTodoList = todoList.filter((item) => {
            if(item.isCompleted === showCompletedOnly || !showCompletedOnly)
                item.isFilterGood = true;
            else
                item.isFilterGood = false;
            return item;
        });

        setTodoList(tempTodoList);
    }
    
    const updateTodoList = (updatedTodoList) => {
        setTodoList(updatedTodoList);
    }

    const updateShowEditModalValue = (val) => {
        setShowEditModal(val);
    }

    const onAddTodo = (event) => {
        event.preventDefault();
       // console.log(event)
        const newTodo = event.target[0].value;
        let tempTodoList = [...todoList];
        tempTodoList.push({
            id: Math.random(),
            isCompleted: false,
            text: newTodo,
            isActive: true,
            isDirty: true,
            isSearchGood: true,
            isFilterGood: true 
        });
        setTodoList(tempTodoList);
    }

    return (
    <> 
        <div className='parent'>
            <div className='searchAndFilter'>
                <div className="form-outline searchBar">
                    <input type="search" id="form1" className="form-control" onChange={(e) => onSearchFilterChange(e)} placeholder="Search todo" aria-label="Search" />
                </div>
                {/* <img src={filterIcon} onClick={onFilterSelect}></img> */}
                <label className="switch" >
                    <input type="checkbox" onChange={(e) => onFilterSelect(e)}></input>
                    <span className="slider round"></span>
                </label>
            </div>
            <div className='todoList'>
                {
                    todoList.map((todo) => {
                        if(todo.isActive && todo.isFilterGood && todo.isSearchGood) 
                            return <Todo todo={todo} todoList={todoList} updateTodoList={updateTodoList} updateShowEditModalValue={updateShowEditModalValue}></Todo>
                    })
                }
            </div>
            <form onSubmit={onAddTodo}>
                <input type="text" id='addTodoInpField' placeholder="Type new todo here..."></input>
                <button type="submit">Add todo</button>
            </form>
            {
                showEditModal && 
                <EditModal></EditModal>
            }
        </div>
    </>);
}