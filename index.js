import express from "express";

// create instance

const app = express();

// Basic routes example

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Express.js</h1>");
});

app.get('/about', (req, res) => {
    res.send("<h1>About</h1>");
});

app.get('/contact', (req, res) => {
    res.send("<h1>Contact</h1>")
});

// Advanced routes example
/**
 * HTTP Methods
 * GET: Retrieve data
 * POST: Create / Insert data
 * PUT: Complete update data
 * PATCH: Partially update data
 * DELETE: Delete data
 * ALL: Any HTTP request method
 */

// String Pattern Example

app.get('/ab?cd', (res, req) => {
    res.send("If user hits acd or abcd then it will run");
});

// Regex Pattern Example

app.get(/x/, (res, req) => {
    res.send("If path has x, it will run, otherwise not");
});

app.get(/^\/users\/[0-9]{4}$/, (res, req) => {
    res.send("Working, this route works when you provider users and 4 letters ");
});

app.get('products/iphone', (res, req) => {
    res.send("This code runs when you provide products/iphone");
});

app.get('categories/products/iphone', (res, req) => {
    res.send("This code runs when you provide categories/products/iphone");
});

/* 
    CALL BACK FUNCTIONS
*/
app.get('/single-cb', (res, req) => {
    res.send("First call back function..");
}, (req, res) => { res.send("Second call back function..") });

// Array of call back functions

const cb1 = (res, req, next) => {
    console.log("Call back 1");
    next();
}

const cb2 = (res, req, next) => {
    console.log("Call back 2");
    next();
}

const cb3 = (res, req) => {
    console.log("Call back 3");
    res.send("Calls back functions arrays");
}

app.get("/array-cb", [cb1, cb2, cb3]);


// STUDENT routes example

app.get('/student', (req, res) => {
    res.send('All students');
});

app.post('/student/id', (req, res) => {
    console.log("Add a new student");
    res.send('Add new student');
});

app.put('student/id', (req, res) => {
    res.send('Update student');
});

app.delete('/student/id', (req, res) => {
    res.send('Delete student');
});


// List at port
app.listen(8500, (req, res) => {
    console.log("Hallo from Express.js");
});