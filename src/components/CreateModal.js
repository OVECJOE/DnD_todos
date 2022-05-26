import { useState } from "react";

function CreateModal({ tasks, setTasks, setCreateFlag }) {
    const [ task, setTask ] = useState({
        title: '',
        desc: '',
        started: false,
        completed: false,
        created_at: Date().toString(),
        completed_at: '',
        assigned_to: ''
    });

    const handleChange = (event) => {
        const { name, type, checked, value } = event.target;

        setTask((prevTask) => ({
            ...prevTask,
            [name]: type === 'checkbox' ? checked : value,
        }))
    };

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
                    onChange={handleChange}
                    name='title'
                    value={task.title}
                    required
                />
                <textarea
                    placeholder="Enter Description"
                    onChange={handleChange}
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