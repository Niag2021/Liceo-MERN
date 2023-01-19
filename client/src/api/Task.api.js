import axios from 'axios';
//Funcion para enviar datos 
export const createTaskRequest = async (task) => 
    await axios.post('http://localhost:4000/tasks', task)