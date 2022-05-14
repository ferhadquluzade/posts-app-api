const express = require('express')
const uniqid = require('uniqid')

const app = express();
app.use(express.json())//converts to json

const posts = ["ok"];



app.get("/posts", (req,res)=>{
    res.status(200).send(posts);
})    //get all
app.post("/posts", (req,res)=>{
    const post={
        id:uniqid(),
        title:req.body.title,
        content:req.body.content
    }
    posts.push(post)
    res.status(201).send(post)
    console.log(post)
})    //make a post
app.get("/posts", (req,res)=>{})    //get single post
app.put("/posts/:id", (req,res)=>{})    //update a post
app.delete("/posts/:id", (req,res)=>{})    //delete a post

app.listen(8080,function(req,resp){
    console.log('post api is running on 8080')
})