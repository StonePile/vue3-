import request from '@/utils/axios'

interface ResponseType<P = {}> {
    code?: number,
    status: number,
    msg: string,
    data: P
}

interface ILogin {
    token:string,
    expires: number
}

export const login = (username: string, password: string) => {
    return request<ResponseType<ILogin>>({
        url: '/api/login',
        method: 'post',
        data: {
            username,
            password
        }
    })
}
