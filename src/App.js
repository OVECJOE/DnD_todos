import { IoIosCreate, IoIosCloseCircle } from 'react-icons/io'
import './App.css';
import NotStarted from './components/NotStarted';
import Pending from './components/Pending';
import Completed from './components/Completed';
import CreateModal from './components/CreateModal';
import { useState } from 'react';

function App() {
  const [tasks, setTasks ] = useState(JSON.parse(localStorage.getItem('DnD_tasks')) || []);
  const [ createFlag, setCreateFlag ] = useState(false);

  function createTask() {
    setCreateFlag((prev) => !prev);
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
        />
        <Pending />
        <Completed />
      </main>
    </div>
  );
}

export default App;
