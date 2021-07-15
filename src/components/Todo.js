import React, {useContext} from 'react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import { TodoContext } from './contexts/TodoContex'
import { AuthContext } from './contexts/AuthContext';

const Todo = () => {

// load todo context
const {todos}= useContext(TodoContext)
    
// Load auth contex
 const {isAuthenticated} = useContext(AuthContext)
    

    return (
        <div className="todo-list">
            <TodoForm />
            {isAuthenticated ?(
                <ul>
                
                {todos.map(todo => (
                    <TodoItem todo={todo} key={todo.id} />
                    
                ))}
                
            </ul>
            ): (<p style={{textAlign:'center'}}> You are not Login</p>)
            }
            
        </div>
    )
}

export default Todo
