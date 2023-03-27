const mongoose=require('mongoose')
const Schema=mongoose.Schema
const topS=new Schema({
    firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        validate: /\S+@\S+\.\S+/,
        unique: true
      },
      dob: {
        type: Date,
        required: true
      },
      branch: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      fatherName: {
        type: String,
        required: true
      },
      motherName: {
        type: String,
        required: true
      },
      fatherMobileNumber: {
        type: String,
        required: true
      },
      motherMobileNumber: {
        type: String,
        required: true
      },
      fatherEmail: {
        type: String,
        validate: /\S+@\S+\.\S+/,
        unique: true,
        required: true
      },
      motherEmail: {
        type: String,
        validate: /\S+@\S+\.\S+/,
        unique: true,
        required: true
      },
      hobbies: {
        type: [String]
     
      },
      interestedGames: {
        type: [String]
      }
},{timestamps:true})
module.exports=mongoose.model('topw',topS)
// ) First Name
// 2) Last Name
// 3) Email ID
// 4) DOB
// 5) Branch
// 6) City
// 7) Father Name
// 8) Mother's Name
// 9) Father's Mobile Number
// 10) Mother's Mobile Number
// 11) Father's Email ID
// 12) Mother's Email ID
// 13) Hobbies (Can choose Multiple)
// 14) Interested Games (Can choose Multiple)
// 