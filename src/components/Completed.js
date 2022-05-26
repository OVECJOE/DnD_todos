import Tasks from './Tasks';

function Completed(props) {
    const completedTasks = props.tasks.filter(task => task.completed);

    return (
        <section className="completed-tasks"
            onDragOver={props.onDragOver}
            onDrop={props.onDrop}
        >
            {completedTasks.length ?
                <Tasks
                tasks={completedTasks}
                onDragStart={props.onDragStart}
            /> : <div className='no-task'>No Completed Task</div>
            }
        </section>
    );
}

export default Completed;