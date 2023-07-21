const express = require("express");
const mongoose = require("mongoose");
const studentRouter = require("./src/routes/student.routes");
const userRouter = require('./src/routes/user.routes')
const cors = require('cors')

const app = express();
// port connection
const PORT = 8080;

// database connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/studentCRUD");
  console.log('database connected')
}


//middleware
app.use(express.json());  
app.use(cors()) 
app.use('/api/students', studentRouter.router);
app.use('/api/users', userRouter.router)

app.listen(PORT, (req, res) => {
  console.log(`server up on port ${PORT}`);
});
