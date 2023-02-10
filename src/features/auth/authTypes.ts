// REQUEST
export type LoginRequestType = {
    email: string
    password: string
    captcha?: string
    rememberMe?:boolean
}


// RESPONSE
export type AuthMeResponseType = {
    id: number
    login: string
    email: string
}

export type LoginResponseType = {
    userId: number
}