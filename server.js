const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(cors())
app.use(express.json())



const db = mysql.createConnection({
    host: 'localhost',
    user:"root",
    password:"",
    database:"signup",
});

app.post('/signup', (req, res) => {
    const sql= "INSERT INTO signup (`name`, `email`, `password`, `confirmPassword`) values(?)";
    const values= [
        req.body.name,
         req.body.email, 
         req.body.password,
        req.body.confirmPassword
    ];
    db.query(sql, [values], (err, data) => {
        if(err)return res.json(err);
        return res.json(data);


        
    });
})

app.listen(3000, () => {
    console.log('Server is running on port 3001')
})