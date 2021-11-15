import { todoObj } from "../reducers";

export const setTodo ='setTodo'
export const getTodo ='getTodo'
export const fn_getDate = ()=>{
    return{
        type:getTodo,
    }
    };
export const fn_setData =(data: todoObj)=>{
    return{
        type:setTodo,
        data: data
    }
}