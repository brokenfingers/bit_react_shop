const express = require('express')
const app = express()
const port = 3003
const cors = require('cors')
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'big_shop',
    port: 4306
});

con.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});


app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json())



//READ

app.get('/admin/products', (req, res) => {
    const sql = `
    SELECT
    *
    FROM products
    `;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

// app.get('/animals', (req, res) => {
//     const sql = `
//     SELECT *
//     FROM animals
//     `
//     con.query(sql, (err, result) => {
//         if (err) throw err;
//         res.send(result)
//     })
// })

// //WRITE

// app.post('/trees', (req, res) => {
//     const sql = `
//         INSERT INTO trees
//         (title, height, type)
//         VALUES (?, ?, ?)
//     `;
//     con.query(sql, [req.body.title ?? 0, req.body.height ?? 0, req.body.type ?? 0], (err, result) => {
//         if (err) throw err
//         res.send(result)
//     })

// })

// app.post('/animals', (req, res) => {
//     const sql = `
//         INSERT INTO animals
//         (name, type, has_owner, age)
//         VALUES (?, ?, ?, ?)
//     `;

//     con.query(sql, [req.body.name ?? 0, req.body.type ?? 0, req.body.has_owner ?? 0, req.body.age ?? 0])
//     res.send('ok')
// })


// //DELETE

// app.delete('/trees/:id', (req, res) => {
//     const sql = `
//         DELETE FROM trees
//         WHERE id = ?
//     `;
//     con.query(sql, [req.params.id], (err, result) => {
//         if (err) throw err;
//         res.send(result)
//     })
// })

// app.delete('/animals/:id', (req, res) => {
//     const sql = `
//         DELETE FROM animals
//         WHERE id = ?
//     `;
//     con.query(sql, [req.params.id], (err, result) => {
//         if (err) throw err;
//         res.send(result)
//     })
// })

// //EDIT

// app.put('/trees/:id', (req, res) => {
//     const sql = `
//         UPDATE trees
//         SET title = ?, height = ?, type = ?
//         WHERE id = ?;`;

//     con.query(sql, [req.body.title, req.body.height, req.body.type, req.params.id], (err, result) => {
//         if (err) throw err;
//         res.send(result)
//     })
// })

// app.put('/animals/:id', (req, res) => {
//     const sql = `
//         UPDATE animals
//         SET name = ?, has_owner = ?, type = ?, age = ?
//         WHERE id = ?;`;
//     con.query(sql, [req.body.name, req.body.has_owner, req.body.type, req.body.type, req.params.id], (err, result) => {
//         if (err) throw err;
//         res.send(result)
//     })
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})




