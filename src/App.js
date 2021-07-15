import AuthContextProvider from './components/contexts/AuthContext';
import ThemeContextProvider from './components/contexts/ThemeContext'
import TodoContextProvider from './components/contexts/TodoContex';
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Todo from "./components/Todo";
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar/>
            <TodoContextProvider>
              <Todo/>
            </TodoContextProvider>
          </AuthContextProvider>
        <ThemeToggle/>
      </ThemeContextProvider>
    

       
    </div>
  );
}

export default App;
