import express from "express";
import mysql2 from "mysql2"
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "nath26an",
    database: "test"
});

app.get("/", (req,res) => {
    res.json("Hello, you've reached the backend!")
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books"
    db.query(q, (err, data) => {
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
})

app.post("/books", (req, res) => {

    const q = "INSERT INTO books (`title`, `description`, `rating`,`cover`) VALUES (?)";

    const values = [
        req.body.title,
        req.body.description,
        req.body.rating,
        req.body.cover,
    ];

    db.query(q, [values], (err, data) => {
        if(err){
            return res.json(err)
        }else{
            return res.json("Book has been created")
        }
    })
})

app.delete("/books/:id", (req, res) => {

    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";

    db.query(q, [bookId], (err, data) => {

        if(err){
            return res.json(err)
        }else{
            return res.json("Book has been successfully deleted")
        }
    })
})



app.listen(8800,() =>{
    console.log("Hello World, backend is up!")
} )