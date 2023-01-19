import express from 'express'; 
import cors from 'cors'; 
import colors from 'colors';
import {PORT} from './config.js'; 
import indexRoutes from './routes/index.routes.js'; 
import taskRoute from './routes/tasks.routes.js'; 

const app = express(); 

////Middlewares
app.use(cors()); 
//procesa los datos del cliente 
app.use(express.json()); 

//app.use(colors); 
app.use(indexRoutes); 
app.use(taskRoute); 
app.listen(PORT)
console.log('Servidor ejecutandose en el puerto '.bgBlue + PORT); 