import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  password: { type: String, require: true },
    email:{type:String,require:true},
    isVerified:{type : Boolean,default:false},
  created_at: { type: Date, default: Date.now },

});

const User = mongoose.model('User', userSchema);
export default User;
