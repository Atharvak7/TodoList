import React from 'react';
import { useState, useEffect, useRef } from 'react';
import filterIcon from '../Images/filterIcon.svg'
import Todolistcss from '../CSS/Todolistcss.css'
import {Todo} from './Todo'

export const EditModal = () => {
    console.log("In modal")
    return (
        <>
            <div className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Save changes</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}