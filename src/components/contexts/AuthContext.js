import React,{createContext, useEffect, useReducer} from 'react'
import { authReducer } from '../reducers/AuthReducer'

export const AuthContext = createContext()

const AuthContextProvider =({children}) =>{
    //State
    
    const [isAuthenticated,dispatch] = useReducer(authReducer,false)

    //use effect
    useEffect(()=>{
      alert(isAuthenticated?'đã login thành công':'Bạn đã đăng xuất. Hãy đăng nhập để thấy những cv cần làm' )
    }, [isAuthenticated])

    //context data
    const authContextData ={
        isAuthenticated,
        dispatch
    }

    //return
   return(
       <AuthContext.Provider  value={authContextData}>
           {children}
       </AuthContext.Provider>
   )
}

export default AuthContextProvider