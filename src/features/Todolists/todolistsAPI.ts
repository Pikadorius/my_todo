import instance, {ApiResponseType} from '../../common/constants/instance';
import {TodoResponseType} from './todolistsTypes';
import {AxiosResponse} from 'axios';

export const todolistsAPI = {
    fetchTodolists: () => instance.get<{}, AxiosResponse<TodoResponseType[]>>('/todo-lists'),
    createTodolist: (title: string) => instance.post<ApiResponseType<TodoResponseType>>('todo-lists', {title})
}