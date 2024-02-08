import express from "express";
import mysql2 from "mysql2";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const app = express();

app.use(express.json());
app.use(cors());

// CONNECT DATABASE
const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "nath26an",
    database: "test"
});

// SET UP SERVER
app.get("/", (req,res) => {
    res.json("Hello, you've reached the backend!");
})

app.listen(8800,() =>{
    console.log("Hello World, backend is up!")
} )


// LOGIN

// Secret key to login
const JWT_SECRET = "test";

const generateToken = (userId) => {
    return jwt.sign({userId}, JWT_SECRET, {expiresIn: "1h"})
}

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE `email` = ?";

    db.query(sql, [email], async (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Internal server error" });
        }
        if (data.length === 0) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        try {
            const isPasswordValid = await bcrypt.compare(password, data[0].password);

            if (!isPasswordValid) {
                return res.status(401).json({ error: "Invalid email or password" });
            }

            // Generate token if password is valid
            const token = generateToken(data[0].userId); // Assuming the userId is present in the data

            // Return token along with success message
            return res.json({ message: "Login successful", token });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal server error" });
        }
    });
});


//CRUD USERS && BOOKS
// READ

app.get("/books", (req, res) => {
    const sql = "SELECT * FROM books"
    db.query(sql, (err, data) => {
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
})

app.get("/users", (req, res) => {

    const sql = "SELECT * FROM users"

    db.query(sql, (err, data) => {
        if(err){
            return console.log(err)
        }else{
            return res.json(data);
        }
    })

})

// CREATE

app.post("/books", (req, res) => {

    const sql = "INSERT INTO books (`title`, `description`, `rating`,`cover`) VALUES (?)";

    const values = [
        req.body.title,
        req.body.description,
        req.body.rating,
        req.body.cover,
    ];

    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json(err)
        }else{
            return res.json("Book has been created")
        }
    })
})

app.post("/users",  async (req, res) => {

    const {username, email, password} = req.body;

    try{

        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";

        const values = [
            req.body.username,
            req.body.email,
            hashedPassword,
        ]
        
        db.query(sql, [values],(err, data) => {
    
            if(err){
                return console.log(err)
            }else{
                return res.json("User has been created");
            }
        })
    }catch(err){
        return console.log(err);
    }
})


// DELETE 

app.delete("/books/:id", (req, res) => {

    const bookId = req.params.id;
    const sql = "DELETE FROM books WHERE id = ?";

    db.query(sql, [bookId], (err, data) => {

        if(err){
            return res.json(err)
        }else{
            return res.json("Book has been successfully deleted")
        }
    })
})


app.delete("/users/:id", (req, res) => {

    const userID = req.params.id;
    const sql = "DELETE FROM users WHERE id = ?"
    
    db.query(sql, [userID], (err, data) => {

        if(err){
            return res.json(err);
        }else{
            return res.json("User has been successfully deleted")
        }
    })

    
})

// USE

app.put("/books/:id", (req, res) => {

    const bookId = req.params.id;
    const sql = "UPDATE books SET `title` = ?, `description`= ?, `rating` = ?, `cover` = ? WHERE id = ?";

    const values = [
        req.body.title,
        req.body.description,
        req.body.rating,
        req.body.cover,
    ]

    db.query(sql, [...values, bookId], (err, data) => {

        if(err){
            return res.json(err)
        }else{
            return res.json("Book has been successfully updated")
        }
    })
})
