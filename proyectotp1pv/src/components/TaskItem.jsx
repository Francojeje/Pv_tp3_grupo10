function TaskItem({ task, onToggle, onDelete }) {
    return (
      <div className="task-item">
        <span
          onClick={() => onToggle(task.id)}
          className={task.completed ? 'completed' : ''}
        >
          {task.text}
        </span>
        <div>
          {!task.completed && (
            <button className="btn-realizado" onClick={() => onToggle(task.id)}>
              Realizado
            </button>
          )}
          <button className="btn-eliminar" onClick={() => onDelete(task.id)}>
            Eliminar
          </button>
        </div>
      </div>
    );
  }
  
  export default TaskItem;
  