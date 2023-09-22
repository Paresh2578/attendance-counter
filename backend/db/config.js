const mongoose = require('mongoose');

require('dotenv').config();



try{
    // mongoose.connect('mongodb://127.0.0.1:27017/Attendance_Counter')
    mongoose.connect(`mongodb+srv://${process.env.DATABASE_UASERNAME}:${process.env.DATABASE_PASSWORD}@attendance.a67enty.mongodb.net/attendanceCounter?retryWrites=true&w=majority`);
    console.log('database connecting..')
}catch(error){
    console.log('database connection error : ' + error);
}