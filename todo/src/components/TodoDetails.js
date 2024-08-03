const TodoDetails = ({todo}) => {
    return (
        <div className="todo-details">
            <h2>{todo.title}</h2>
            <p>
            {todo.time} -   
            <span
            className={`taskType ${todo.completed ? 'completed' : 'notCompleted'}`}
            >
                {todo.completed ? "Completed" : "Pending"}
            </span>
            </p>

        </div>
    )
}

export default TodoDetails;