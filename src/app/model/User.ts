export interface User{
    id?: number
    name: string,
    username: string,
    password: string,
    email: string,
    age: number,
    roles?: [{
        id: number,
        name: string
    }]
}