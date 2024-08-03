import { useState } from "react";


const TodoForm = () => {
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState(null);

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
        if(!data.ok){
            setError(data.message);
        }
        if(data.ok){
            setTitle('');
            setTime('');
            setCompleted(false);
            setError(null);
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
            />

            <label>Task Time:</label>
            <input
                type = "time"
                value = {time}
                onChange={(e) => setTime(e.target.value)}
            />


           
            <button>Add Task</button>

        </form>
    )
}

export default TodoForm;