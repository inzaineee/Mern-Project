import { useEffect, useState } from "react";
import TodoDetails from "../components/TodoDetails";
import TodoForm from "../components/TodoForm";

const Home = () => {
    const [todos, setTodos] = useState(null);
    useEffect(() =>{

        const fetchData = async () => {
            const response = await fetch('/api/todos');
            const data = await response.json();

            if(response.ok){
                setTodos(data)
            } else{
                console.log(response)
            }
        }
        fetchData();
    }, [])

    return(
        <div className="home">
            <div className="data">
                {todos && todos.map((todo) => (
                    <TodoDetails key={todo._id} todo={todo} />  
                ))}
            </div>
            <TodoForm/>   
        </div>
    )
}

export default Home;