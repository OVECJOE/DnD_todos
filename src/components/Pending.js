import Tasks from "./Tasks";

function Pending(props) {
    const startedTasks = props.tasks.filter((task) => task.started && !task.completed);

    return (
        <section className="pending-tasks"
            onDragOver={props.onDragOver}
            onDrop={props.onDrop}
        >
            {startedTasks.length ?
                <Tasks
                    tasks={startedTasks}
                    onDragStart={props.onDragStart}
                /> : <div className='no-task'>No Pending Task</div>
            }
        </section>
    );
}

export default Pending;