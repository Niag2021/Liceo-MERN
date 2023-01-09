import { pool } from '../db.js'; 

export const createTask = async (req, res) => { 
    const { title, description } = req.body;
    const [result] = await pool.query("INSERT INTO tasks (title, description) VALUES (?, ?)", [title, description]);
    console.log(result);
    res.json({id: result.insertId, title, description});
    //console.log(req.body); 
    res.send('Creando tarea.'); } 

    export const getTasks = (req, res) => { 
        res.send('Obteniendo tareas.'); 
    } 
    export const getTask = (req, res) => { 
        res.send('Obteniendo tarea.'); 
    } 
export const updateTask = (req, res) => { 
    res.send('Actualizando tarea.'); 
} 

export const deleteTask = (req, res) => { 
    res.send('Eliminando tarea.'); 
} 