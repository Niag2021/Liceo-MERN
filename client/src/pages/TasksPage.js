import {useEffect, useState} from 'react'
import { getTaskRequest } from '../api/Task.api';
import TaskCard from '../components/TaskCard.js';

function TasksPage(){
  const [tasks,setTasks] = useState([]); 
  useEffect(() => {
    async function loadTasks(){
      const response = await getTaskRequest();
      //console.log(response.data);
      setTasks(response.data);
    }
    loadTasks()
  }, []); 

  function renderMain(){
    if (tasks.length === 0) return <h1>No tasks yet.</h1>
      return tasks.map((task) => 
        <TaskCard task={task} key={task.id} />);
  }

  return (
    //<></>
    <div>
      <h1>Tasks</h1>
      {renderMain()}
      
    </div>
  )
}

export default TasksPage;
