let mongoose=require('mongoose')
let menSchema=mongoose.Schema({
    image: String,
    brand: String,
    product: String,
    price: Number,
    strike: Number,
    discount: String,
    quantity:Number
  },
  {
    versionKey: false,
  }
)

let MenModel=mongoose.model("mendata",menSchema)
module.exports={
    MenModel
}