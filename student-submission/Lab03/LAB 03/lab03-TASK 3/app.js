require('./db/connect')
const express = require('express');
const app = express();
const tasks = require('./routes/task')
const categories = require('./routes/task')
const connectDB = require('./db/connect');

require('dotenv').config()


//middleware

app.use(express.json())

//routes
app.get('/hello',(req,res)=>
{
    res.send('Task Manager app')
})


app.use('/api/v1/tasks',categories)
app.use('/api/v1/category',tasks)





const port = 3000

const start = async ()=>
{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
        
    }
}

start()



