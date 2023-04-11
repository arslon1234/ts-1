export interface IAuth {
    username: "",
    password:"",
    password2?:""
}
export interface IPosts {
    userId: number | null,
    id: number | null,
    title: string,
    body: string
}