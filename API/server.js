require('dotenv').config();
const todoRoutes = require('./routes/todo');



const express = require('express');
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

// Routes
app.use('/api/todo',todoRoutes);


app.listen(process.env.PORT, () =>{
  console.log(`Server is running on port ${process.env.PORT}`);
})