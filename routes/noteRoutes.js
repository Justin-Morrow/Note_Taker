const express = require("express");
const router = express.Router();
const fs = require("fs");
const {v4: uuidv4 } = require('uuid');
const path = require("path");
const { notStrictEqual } = require("assert"); 
const res = require("express/lib/response");

const DIR_DATABASE = path.resolve(__dirname, "../db")

router.get("/notes",(req,res)=>{
    const notes = readFile(); 
    res.json(notes)
})

router.post("/notes",(req,res)=>{
    const newTask = req.body
    newTask.id = uuidv4(); 
    const notes = readFile();
    notes.push(newTask)
    fswriteFileSync(path.join(DIR_DATABASE, "notes.json"),JSON.stringify(notes))
    res.json({message:"data received"})

})

router.delete("/notes/:id", (req,res)=> {
    //filter data 
    const deleteNote = req.params.id;
    let notes = readFile();
    notes = notes.filter(note => note.id != deleteNote)
    fs.writeFileSync(path.join(DIR_DATABASE, "notes.json"),JSON.stringify(notes))
    res.json({message:"data deleted"})
}) 

const readFile = () => {
    try {
        return JSON.parse(fs.readFileSync(path.join(DIR_DATABASE, "notes.json"), "utf8"));
    } catch (err) {
        console.error(err);
    }
}


module.exports = router;