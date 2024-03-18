import mysql from 'mysql'

// create the connection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'knysys123',
    database: 'ProjectApp'
})

export default db