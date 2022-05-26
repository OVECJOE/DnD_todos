import { IoIosCreate, IoIosCloseCircle } from 'react-icons/io'
import './App.css';
import NotStarted from './components/NotStarted';
import Pending from './components/Pending';
import Completed from './components/Completed';
import CreateModal from './components/CreateModal';
import { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('DnD_tasks')) || []);
  const [createFlag, setCreateFlag] = useState(false);

  useEffect(() => {
    console.log(tasks);
    tasks !== [] && localStorage.setItem('DnD_tasks', JSON.stringify(tasks));
  });

  function createTask() {
    setCreateFlag((prev) => !prev);
  }

  const onDragStart = (e, id) => {
    e.dataTransfer.setData('id', id);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  }

  const onDrop = (e) => {
    const id = e.dataTransfer.getData('id');

    const updatedTasks = tasks.map(task => {
      if (task.title === id) {
        if (!task.started) {
          task.started = true;
        } else if (task.started && !task.completed) {
          task.completed = true;
          task.completed_at = Date().toString();
        }
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <header className='project-header'>
        <h1 className='project-name'>Dn'D ToDo App</h1>
        <button className='create-task' onClick={createTask}>
          {createFlag ?
            <>
              <IoIosCloseCircle />
              Close Task Modal
            </> :
            <>
              <IoIosCreate />
              Create Task
            </>
          }
        </button>
      </header>
      {createFlag && <CreateModal
        tasks={tasks}
        setTasks={setTasks}
        setCreateFlag={setCreateFlag}
      />}
      <main className='main-board'>
        <NotStarted
          tasks={tasks}
          setTasks={setTasks}
          onDragStart={onDragStart}
        />
        <Pending
          tasks={tasks}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
        />
        <Completed
          tasks={tasks}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
        />
      </main>
    </div>
  );
}

export default App;
