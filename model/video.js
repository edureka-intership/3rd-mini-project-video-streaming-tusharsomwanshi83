const mongoose = require('mongoose')
const mongooseSchema = mongoose.Schema({
    "_id": {
        type:String,
        required:true
    },
    "title": {
        type:String,
        required:true
    },
    "title_img": {
        type:String,
        required:true
    },
    "synopsis": {
        type:String,
        required:true
    },
    "banner": {
        type:String,
        required:true
    },
    "rating": {
        type:String,
        required:true
    },
    "path": {
        type:String,
        required:true
    },
    "type":{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("Video",mongooseSchema,'videos')