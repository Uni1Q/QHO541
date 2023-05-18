const express = require('express')
const mongoose = require('mongoose')
const netflixContent = require('./models/netflixModels.js')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes

// default route
app.get('/', function(req, res) {
    res.send('Netflix Content API')
})

// displays entire database
app.get('/content', async(req, res) =>{
    try {
        const contents = await netflixContent.find({});
        res.status(200).json(contents);
    } catch(error){
        res.status(500).json({message: error.message})
    }
})

// displays specific item based on ID
app.get('/content/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const content = await netflixContent.findById(id);
        res.status(200).json(content);
    } catch(error){
        res.status(500).json({message: error.message})
    }
})

// add data

app.post('/show', async(req, res) => {
    try  {
        const show = await netflixContent.create(req.body)
        res.status(200).json(show);

    } catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// update

app.put('/content/:id', async(req, res)=>{
    try{
        const {id} = req.params;
        const show = await netflixContent.findByIdAndUpdate(id, req.body);
        if(!show){
            return res.status(404).json({message: 'cannot find any content with specified id'})
        }
        const updatedShow = await netflixContent.findById(id);
        res.status(200).json(updatedShow);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete operation

app.delete('/content/:id', async(req, res) =>{  
    try{
        const {id} = req.params;
        const show = await netflixContent.findByIdAndDelete(id);
        if(!show){
            return res.status(404).json({message: 'cannot find any product with specified ID'})
        }
        res.status(200).json(show);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// database connect

mongoose.set("strictQuery", false)
mongoose.
connect('mongodb://127.0.0.1:27017/Netflix')
.then(() => {
    app.listen(3000, ()=> {
        console.log('node API app is running on port 3000 ')
    })
}).catch((error) => {
    console.log('Error')
})