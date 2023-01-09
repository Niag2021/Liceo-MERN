import { pool } from '../db.js'; 

export const getTasks = async (req, res) => { 
    //res.send('Obteniendo tareas.'); 
    const [result] = await pool.query("SELECT * FROM tasks ORDER BY createdAt ASC"); 
    res.json(result);
} 

export const getTask = async (req, res) => { 
    //res.send('Obteniendo tarea.'); 
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ? ", [req.params.id]); 
    res.json(result); 
} 

export const createTask = async (req, res) => { 
    const { title, description } = req.body;
    const [result] = await pool.query("INSERT INTO tasks (title, description) VALUES (?, ?)", [title, description]);
    console.log(result);
    res.json({id: result.insertId, title, description});
    //console.log(req.body); 
    res.send('Creando tarea.');
} 

export const updateTask = (req, res) => { 
    res.send('Actualizando tarea.'); 
} 

export const deleteTask = (req, res) => { 
    res.send('Eliminando tarea.'); 
} 