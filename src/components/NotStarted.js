function NotStarted(props) {
    return (
        <section className="unstarted-tasks">
            <h1>Not Started Tasks</h1>
            <ul className="tasks">
                {props.tasks.map((task) => {
                    return (
                        <li key={props.tasks.indexOf()} className="task">
                            {task.title}
                        </li>
                    )
                })}
            </ul>
        </section>
    );
}

export default NotStarted;