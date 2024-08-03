import { useState } from "react";
import { useTodoContext } from "../hooks/useTodoContext";


const TodoForm = () => {
    const { dispatch } = useTodoContext();

    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newTodo = {title, time, completed};   

        const response = await fetch('/api/todos/create', {
            method: 'POST',
            body: JSON.stringify(newTodo),
            headers:{
                 'Content-Type': 'application/json'
            }
        });
        
        const data = await response.json();
        if(!response.ok){
            setError(data.message);
            setEmptyFields(data.emptyFields);
        }
        if(response.ok){
            setEmptyFields([]);
            setTitle('');
            setTime('');
            setCompleted(false);
            setError(null);
            dispatch({type: 'CREATE_TODO', payload: data});
        }
    }

    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <h3>Add a new Task</h3>
            {error && <div className="error">{error}</div>}
            <label>Task Title:</label>
            <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Task Time:</label>
            <input
                type = "time"
                value = {time}
                onChange={(e) => setTime(e.target.value)}
                className={emptyFields.includes('time') ? 'error' : ''}
            />
           
            <button>Add Task</button>

        </form>
    )
}

export default TodoForm;