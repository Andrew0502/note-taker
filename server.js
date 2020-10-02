const express = require("express"); // require express.
const fs = require("fs"); // require fs
const app = express(); //create an instance of express? Yes
const store = require("./Develop/db/store.js");
const path = require("path");

const PORT = process.env.PORT || 8080;

// middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/api/notes", (req, res) => {
    store.getNotes().then(notes => {
        res.json(notes)
    }).catch(error =>{
        res.status(500).json(error);
    });
});

// Use app.post
// Specify the route path (should include resource type)
// Going to post a new object to our database.
app.post("/api/notes", (req, res) => {  // notes the resource type?
    console.log(req.body);
    store.setNotes().then(notes => {
        res.json(notes)
    }).catch(error => {
        res.status(500).json(error);
    })
})

app.delete("/api/notes/:id", (req, res) => {

    
    // try {
    //     db = db.filter((note) => note.id != req.params );
    //     res.json({message: "your note was delete"});
    // } 
    // catch (error) {
    //     throw error;
    // }
});

app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});

app.get("/notes", (req, res) => { 
    res.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
});


// Listen on the port.
app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});




// GET Routes
// Use app.get
// Specify the route path (should include the resource type)
// Retrieve the data
// Send response to the user.

// POST Routes
// Use app.post
// Specify the route path (should include resource type)
// Handle the incoming POST body
// Save the data
// Send response to the user.
// Error handling

// To Test POST Routes
// Go to Postman
// Select POST request from the dropdown
// Select Body from the menu
// Select raw
// Select JSON