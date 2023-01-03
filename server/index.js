//console.log('Hola Niag'); 
import express from 'express'; 
import {PORT} from './config.js'; 
import indexRoutes from './routes/index.routes.js'; 
import taskRoute from './routes/tasks.routes.js'; 

const app = express(); 

app.use(indexRoutes); 
app.use(taskRoute); 
app.listen(PORT)
console.log('Servidor ejecutandose en el puerto '+PORT+"."); 