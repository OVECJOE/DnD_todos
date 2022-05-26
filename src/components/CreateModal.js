import { handleChange, useTask } from "./handleChange";

function CreateModal({ tasks, setTasks, setCreateFlag }) {
    const [task, setTask] = useTask();

    const createTask = (event) => {
        event.preventDefault();

        for (const t of tasks) {
            if (t.title === task.title) {
                alert('Task with the same title has already been created!');
                return;
            }
        }

        setTasks((prevTasks) => {
            prevTasks.unshift(task);
            setCreateFlag(false);
            return prevTasks;
        });
    };

    return (
        <div className="create-modal">
            <h1>Create Task</h1>
            <form className="form" onSubmit={createTask}>
                <input
                    type='text'
                    placeholder="Enter Task Title"
                    onChange={(event) => handleChange(event, setTask)}
                    name='title'
                    value={task.title}
                    required
                />
                <textarea
                    placeholder="Enter Description"
                    onChange={(event) => handleChange(event, setTask)}
                    name='desc'
                    value={task.desc}
                    rows='5'
                />
                <button>Create</button>
            </form>
        </div>
    )
}

export default CreateModal;