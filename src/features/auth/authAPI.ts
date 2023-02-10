import instance from '../../common/constants/instance';
import {ResponseType} from '../../common/constants/instance';
import {AuthMeResponseType, LoginRequestType, LoginResponseType} from './authTypes';

export const authAPI = {
    me: () => instance.get<ResponseType<AuthMeResponseType>>('/auth/me'),

    login: (data: LoginRequestType) => instance.post<ResponseType<LoginResponseType>>('/auth/login', data),

    logout: () => instance.delete<ResponseType>('/auth/login')
}