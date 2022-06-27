const express = require("express");
const router = express.Router();
const fs = require("fs");
const {v4: uuidv4 } = require('uuid');
const path = require("path");
const { notStrictEqual } = require("assert"); 
const res = require("express/lib/response");

const DIR_DATABASE = path.resolve(__dirname, "../db")

router.get("/notes",(req,res)=>{
    const notes = fs.readFile(); 
    res.json(notes)
})

