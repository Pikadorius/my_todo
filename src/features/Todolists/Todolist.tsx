import React from 'react';
import {useAppSelector} from '../../app/store';
import {TodoDomainType} from './todolistsTypes';

type TodolistType = {
    todolist: TodoDomainType
}

const Todolist = (props: TodolistType) => {

    return (
        <div style={{marginLeft:'300px'}}>
            {props.todolist.title}
        </div>
    );
};

export default Todolist;