const mongoose = require('mongoose');

try{
    mongoose.connect('mongodb://127.0.0.1:27017/Attendance_Counter')
    console.log('database connecting..')
    console.log(Date.now());
    // 1695305052736
}catch(error){
    console.log('database connection error : ' + error);
}