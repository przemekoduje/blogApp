import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"altiff1974", 
    database: "blog"
})

