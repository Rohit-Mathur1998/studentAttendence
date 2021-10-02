const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 

const studentSchema = new Schema ({
    rollNumber:{
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    class: {
        type: String,
        required: true
    }
}, {timestamp: true})


const Student = new mongoose.model('student', studentSchema)
module.exports=Student;