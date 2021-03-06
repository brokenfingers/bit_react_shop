const express = require('express')
const app = express()
const port = 3003
const cors = require('cors')
const mysql = require('mysql');

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }))
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

app.post('/admin/products', (req, res) => {
    const sql = `
        INSERT INTO products
        (title, code, price, description, photo)
        VALUES (?, ?, ?, ?, ?)
    `;
    con.query(sql, [req.body.title ?? 0, req.body.code ?? 0, req.body.price ?? 0, req.body.description ?? 0, req.body.photo ?? null], (err, result) => {
        if (err) throw err
        res.send(result)
    })

})


// //DELETE

app.delete('/admin/products/:id', (req, res) => {
    // console.log(req.params.id)
    const sql = `
        DELETE FROM products
        WHERE id = ?
    `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

// //EDIT

app.put('/admin/products', (req, res) => {
    const sql = `
        UPDATE products
        SET title = ?, code = ?, price = ?, description = ?, photo = ?
        WHERE id = ?;`;

    con.query(sql, [req.body.title, req.body.code, req.body.price, req.body.description, req.body.photo, req.body.id], (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

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


//FRONT

app.get('/products', (req, res) => {
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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})




