import { json } from 'express';
import { pool } from '../db.js'; 

export const getTasks = async (req, res) => { 
    //res.send('Obteniendo tareas.'); 
    const [result] = await pool.query("SELECT * FROM tasks ORDER BY createdAt ASC"); 
    res.json(result);
} 

export const getTask = async (req, res) => { 
    //res.send('Obteniendo tarea.'); 
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ? ", [req.params.id]); 
    //res.json(result[0]); 

    if(result.length === 0)
        return res.status(404).json({ message: "Task not found" });
        res.json(result[0]); 
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

export const deleteTask = async (req, res) => { 
    //res.send('Eliminando tarea.'); 
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ? ", [req.params.id]);
    //res.json(result); 

    if(result.affectedRows === 0)
        return res.status(404).json({ message: "Task not found" });
        res.json(result[0]); 
} 