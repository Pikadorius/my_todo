import instance from '../../common/constants/instance';
import {TodoResponseType} from './todolistsTypes';
import {AxiosResponse} from 'axios';

export const todolistsAPI = {
    fetchTodolists: ()=>instance.get<{},AxiosResponse<TodoResponseType[]>>('/todo-lists')
}