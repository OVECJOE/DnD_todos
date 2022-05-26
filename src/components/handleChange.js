import { useState } from "react";

export const useTask = () => {
    const [ task, setTask ] = useState({
        title: '',
        desc: '',
        started: false,
        completed: false,
        created_at: Date().toString(),
        completed_at: '',
        assigned_to: ''
    });

    return [task, setTask];
}

export const handleChange = (event, setTask) => {
    const { name, type, checked, value } = event.target;

    setTask((prevTask) => ({
        ...prevTask,
        [name]: type === 'checkbox' ? checked : value,
    }))
};