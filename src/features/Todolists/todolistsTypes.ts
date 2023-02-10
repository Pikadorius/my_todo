import {date} from 'yup';
import {StatusType} from '../../app/appSlice';

export type TodoResponseType = {
    id: string
    title: string
    addedDate: string
    order: number
}

export type TodoDomainType = TodoResponseType & {todoStatus: StatusType}
