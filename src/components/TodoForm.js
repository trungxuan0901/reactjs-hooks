import React,{useState, useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO } from './reducers/types';
import { ThemeContext } from './contexts/ThemeContext'
import { TodoContext } from './contexts/TodoContex';


const TodoForm = () => {
    //Load context theme
    const {theme}= useContext(ThemeContext)
    const {isLightTheme, light, dark}= theme
    const style = isLightTheme ? light: dark
    //Load context todo
    const {dispatch} = useContext(TodoContext)




// For this component only
    const [title, setTitle]= useState('')

    const onTitleChange = event =>{
        setTitle(event.target.value)
    }

    const handleSubmit = event =>{
        event.preventDefault()
        dispatch({
           type: ADD_TODO,
           payload: {
               todo:{
                   id: uuidv4(),
                   title
               }
           }
        })
        setTitle('')
    }

    return (
      <form onSubmit={handleSubmit}>
          <input type="text" name="title" style={style}
          onChange={onTitleChange} value={title} placeholder ="enter a new todo...."
          required/>
          <input style={style} type="submit" 
          value="Add" />
      </form>
    )
}

export default TodoForm
