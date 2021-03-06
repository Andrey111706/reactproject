import axios from "axios";

let instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY":"61f18a8d-1329-4318-a223-1eadab5f36f5"
    }

})
export const getAuthInfo = () => {
    return instance.get(`auth/me`)
}
export const getUsers = (currentPage,pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
}
export const unFollowAPI =(id)=>{
    return instance.delete(`follow/${id}`)
}
export const followAPI =(id)=>{
    return instance.post(`follow/${id}`)
}
export const userPageAPI =(id)=>{
    return instance.get(`profile/${id}`)
}
export const getStatusAPI = (id) => {
    return instance.get(`profile/status/${id}`)
}
export const setStatusAPI = (status) => {
    return instance.put(`profile/status/`, {status:status})
}
export const loginAPI = (email,password,rememberMe= false) => {
    return instance.post(`auth/login`, {email,password,rememberMe})
}
export const logOutAPI = () => {
    return instance.delete(`auth/login`)
}