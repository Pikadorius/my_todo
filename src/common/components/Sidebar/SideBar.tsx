import React from 'react';
import s from './SideBar.module.css'
import {TodoDomainType} from '../../../features/Todolists/todolistsTypes';
import {NavLink} from 'react-router-dom';

type SideBarType = {
    todos: TodoDomainType[]
}
const SideBar = (props: SideBarType) => {
    return (
        <div className={s.container}>
            {props.todos.map(t=>{
                // return <NavLink className={s.link} key={t.id} to={t.title}>{t.title}</NavLink>
                return <NavLink className={({ isActive }) => (isActive ? `${s.active} ${s.link}` : s.link)} key={t.id} to={t.title}>{t.title}</NavLink>
            })}
        </div>
    );
};

export default SideBar;