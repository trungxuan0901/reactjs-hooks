import React, {useReducer, createContext, useEffect} from 'react'
import { todoReducer } from '../reducers/TodoReducer'
import { GET_TODOS, SAVE_TODOS } from '../reducers/types'

export const TodoContext = createContext()

const TodoContextProvider =({children}) =>{
    // state 
    // const[todos, setTodos]= useState([])
    //ÚseEffect 
    const [todos, dispatch ]= useReducer(todoReducer, [])

    useEffect(()=> {
        dispatch({
            type: GET_TODOS,
            payload: null
        })
    },[])
    useEffect (()=>{
        dispatch({
            type: SAVE_TODOS,
            payload: {todos}
        })
    },[todos])


  

    // context data
     const TodoContextData ={
         todos,
         dispatch
     }
     return (
         <TodoContext.Provider value={TodoContextData}>
             {children}
         </TodoContext.Provider>
     )
    }

    export default TodoContextProvider