function Tasks({ tasks, onDragStart }) {
    return (
        <div className="tasks">
            {tasks.map((task) => {
                return (
                    <div key={task.title} className="task"
                        draggable
                        onDragStart={(e) => onDragStart(e, task.title)}
                    >
                        <div className='task-title'>
                            <h3>{task.title}</h3>
                            <span>{!task.started ? 'NOT STARTED' :
                                task.started && task.completed ?
                                    'Completed' : 'Pending'}
                            </span>
                        </div>
                        <div className='task-info'>
                            <p className='task-desc'>{task.desc}</p>
                            <div className='task-datetime'>
                                <p><strong>Started:</strong> <time>{task.created_at}</time></p>
                                {task.completed &&
                                    <p><strong>Completed:</strong> <time>{task.completed_at}</time></p>
                                }
                            </div>
                            {task.assigned_to && <p className="assigned-to">
                                <strong>ASSIGNED TO &mdash;</strong> {task.assigned_to}</p>}
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default Tasks;