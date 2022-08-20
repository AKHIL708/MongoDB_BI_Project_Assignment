const mongoose = require("mongoose")
const list = new mongoose.Schema({
    StudentFirstName : {
        type : String,
        required : true
    },
    CollegeName : {
        type : String,
        required : true
    },
    Location : {
        type : String,
        required : true
    }

});

const StudentDetails = new mongoose.model("StudentDetails",list)

module.exports = StudentDetails;