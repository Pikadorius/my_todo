import React from 'react';
import {TodoDomainType} from '../../../features/Todolists/todolistsTypes';
import {NavLink} from 'react-router-dom';
import {useAppDispatch} from '../../../app/store';
import {deleteTodoTC} from '../../../features/Todolists/todolistsSlice';
import s from './TodoLink.module.css'

type TodoLinkType = {
    todo: TodoDomainType
}
const TodoLink = (props: TodoLinkType) => {

    const dispatch = useAppDispatch()

    const deleteTodo = () => {
        dispatch(deleteTodoTC(props.todo.id))
    }

    return (
        <div>
            <NavLink
                className={({isActive}) => (isActive ? `${s.active} ${s.link}` : s.link)}
                key={props.todo.id}
                to={props.todo.title}>
                {props.todo.title}
            </NavLink>

            <button onClick={deleteTodo}>Delete</button>

        </div>
    );
};

export default TodoLink;