import React from 'react';
import s from './SideBar.module.css'
import {TodoDomainType} from '../../../features/Todolists/todolistsTypes';
import {NavLink} from 'react-router-dom';
import ModalWindow from '../Modal';
import TodoLink from '../TodoLink/TodoLink';

type SideBarType = {
    todos: TodoDomainType[]
}
const SideBar = (props: SideBarType) => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className={s.container}>
            {props.todos.map((t,i)=>{
                // return <NavLink className={s.link} key={t.id} to={t.title}>{t.title}</NavLink>
                return <TodoLink todo={t} key={t.id}/>
            })}
            <button onClick={()=>setOpen(true)}>Create todolist</button>
            <ModalWindow open={open} isOpened={setOpen}/>
        </div>
    );
};

export default SideBar;