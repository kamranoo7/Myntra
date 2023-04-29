let mongoose=require('mongoose')
let menSchema=mongoose.Schema({
    image: String,
    brand: String,
    product: String,
    price: String,
    strike: Number,
    discount: String,
    quantity:Number
  },
  {
    versionKey: false,
  }
)

let MenModel=mongoose.model("mendatas",menSchema)
module.exports={
    MenModel
}