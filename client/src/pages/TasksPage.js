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
  }, [])

  return (
    //<></>
    <div>
      <h1>Tasks</h1>
      {
        tasks.map(task => (
          <TaskCard task={task} key={task.id}/>
        ))
      }
    </div>
  )
}

export default TasksPage;
