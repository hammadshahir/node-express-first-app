//app.route() example

import express from "express";
import { append } from "express/lib/response";
/** Let suppose following are routes for a typical app 
 * // STUDENT routes example

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
 * 
 * We can use app.route() to refactor the above code.
 */

app.route('/student')
    .get((req, res) => ('All students'))
    .post((req, res) => ('Add new student'))
    .put((req, res) => ('Edit student'))
    .delete((req, res) => ('Delete student'));