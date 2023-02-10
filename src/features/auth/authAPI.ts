import instance from '../../common/constants/instance';
import {ApiResponseType} from '../../common/constants/instance';
import {AuthMeResponseType, LoginRequestType, LoginResponseType} from './authTypes';

export const authAPI = {
    me: () => instance.get<ApiResponseType<AuthMeResponseType>>('/auth/me'),

    login: (data: LoginRequestType) => instance.post<ApiResponseType<LoginResponseType>>('/auth/login', data),

    logout: () => instance.delete<ApiResponseType>('/auth/login')
}