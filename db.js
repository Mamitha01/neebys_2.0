const mongoose = require("mongoose");


async function getDatabase(){

  mongoose.connect('mongodb+srv://shailendarshai25:t8NlDcHflOD2qMv9@neebys.zf8vw5d.mongodb.net/?retryWrites=true&w=majority&appName=neebys')
  .then(() =>{
    console.log('database connected!')
  }).catch(()=>{
    console.log('error')
  })
}
module.export={
  getDatabase,
}