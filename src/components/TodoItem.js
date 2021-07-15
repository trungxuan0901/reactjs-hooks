import React,{useContext} from 'react'
import { DELETE_TODO } from './reducers/types'
import { ThemeContext } from './contexts/ThemeContext'
import { TodoContext } from './contexts/TodoContex'

const TodoItem = ({todo}) => {
    //Load Theme
    const {theme} = useContext(ThemeContext)
    const {isLightTheme, light,dark}= theme

    const style = isLightTheme ? light: dark

    //Load TodoContext
    const {dispatch}= useContext(TodoContext)

    return <li onClick={()=>{
        dispatch ({
            type: DELETE_TODO,
            payload:{
                id: todo.id
            }
        })
    }} style={style}>{todo.title}</li>   /*cách 1*/
    //  cách 2 <li onClick={()=> {deleteTodo(todo.id)}} style={style}>{todo.title}</li>
}
   


export default TodoItem
