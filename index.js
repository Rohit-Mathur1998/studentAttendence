const express = require('express');
const attendanceRoutes = require('./routes/attendanceRoutes');
const controller = require('./routes/controller/controller');
const app = express();
const PORT = 5000;

app.use(express.json())
app.use(express.urlencoded({extended: false}))

attendanceRoutes(app);




app.listen(PORT, (err) => {
    if(err)
    {
        console.log(err);

    }
    else{
        console.log(`server running at PORT: ${PORT}`)
    }

});
