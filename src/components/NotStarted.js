import Tasks from './Tasks';

function NotStarted(props) {
    const notStartedTasks = props.tasks.filter(task => !task.started);

    return (
        <section className="unstarted-tasks">
            {notStartedTasks.length ?
                <Tasks
                    tasks={notStartedTasks}
                    onDragStart={props.onDragStart}
                /> : <div className='no-task'>
                    No New Task
                </div>
            }
        </section>
    );
}

export default NotStarted;