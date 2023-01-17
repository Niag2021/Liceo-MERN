import { pool } from '../db.js'; 

export const getTasks = async (req, res) => { 
    try{
        //res.send('Obteniendo tareas.'); 
        const [result] = await pool.query("SELECT * FROM tasks ORDER BY createdAt ASC"); 
        res.json(result);
    }catch (error){
        return res.status(500).json({message: error.message});
    }
} 

export const getTask = async (req, res) => { 
   try{
        //res.send('Obteniendo tarea.'); 
        const [result] = await pool.query("SELECT * FROM tasks WHERE id = ? ", [req.params.id]); 
        //res.json(result[0]); 
 
        if(result.length === 0)
            return res.status(404).json({ message: "Task not found." });
            res.json(result[0]); 
   } catch (error){
        return res.status(500).json({message: error.message});
   }
} 

export const createTask = async (req, res) => { 
    try{
        const { title, description } = req.body;
        const [result] = await pool.query("INSERT INTO tasks (title, description) VALUES (?, ?)", [title, description]);
        console.log(result);
        res.json({id: result.insertId, title, description});
        //console.log(req.body); 
        //res.send('Creando tarea.');
    } catch (error){
        return res.status(500).json({message: error.message});
    }
} 

export const updateTask = async (req, res) => { 
    try{
        const result = await pool.query("UPDATE tasks SET ? WHERE id = ?", [req.body, req.params.id]);
        res.json(result)
    } catch (error){
        return res.status(500).json({message: error.message});
    }    
} 

export const deleteTask = async (req, res) => { 
    try {
        res.send('Task deleted.'); 
        const [result] = await pool.query("DELETE FROM tasks WHERE id = ? ", [req.params.id]);
        //res.json(result); 

        if(result.affectedRows === 0)
            return res.status(404).json({ message: "Task not found" });
            res.json(result[0]); 
    } catch (error){
        return res.status(500).json({message: error.message});
    }
} 