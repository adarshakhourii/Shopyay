const mongoose = require("mongoose")
// const Review = require("./ReviewModel")
// const imageSchema=mongoose.Schema({
//     path: {type: String, required: true}
// })

const reviewSchema=mongoose.Schema({
    comment: {
        type:String,
        required: true,
    },
    rating:{
        type: Number,
        required: true,
    },
    user:{
        _id: {type: mongoose.Schema.Types.ObjectId, required: true},
        name: {type:String, required:true}
    }
},{
    timestamps: true,
})
const Review = mongoose.model("Review", reviewSchema)
module.exports = Review