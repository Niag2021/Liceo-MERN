import { createPool } from 'mysql2/promise';
//se instancia pool, con pool se podran hacer consultas SQL 
export const pool = new createPool({
    host: 'localhost', 
    port: 3306, 
    user: 'root',
    password: '05102142', 
    database: 'liceo'
}); 

