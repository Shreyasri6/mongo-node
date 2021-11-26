const  HouseModel  = require("./model");

module.exports.create = async ({
  name,
  quantity,
  isSanitized,
  unit,
  expiryDate,
  createdDate,
  updatedDated,
  category,
  location,
}) => {
  const item = await HouseModel.create({
    name: name,
    quantity:quantity,
    sanitized:isSanitized,
    unit:unit,
    expiry:expiryDate,
    created:createdDate,
    updated:updatedDated,
    category:category,
    location:location,
  });
  return{
      item
  }
};
module.exports.getAll=async()=>{
    const items= await HouseModel.find();
    return items;
}

module.exports.delete=async({id})=>{
    const res= await HouseModel.deleteMany({
        _id:id
    })
    return res;
}

module.exports.update=async({id}, itemdata)=>{
  const updateItem= await HouseModel.findOneAndUpdate(id, itemdata, {new:true})
  return updateItem;
}
console.log("working")