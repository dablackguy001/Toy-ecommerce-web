import ToyModel from "../model/ToyModel.js";
import fs from "fs";

const addToy = async (req, res) => {
  try {
    console.log("Uploaded files:", req.files);
    console.log("Body received:", req.body);

    if (!req.files || req.files.length === 0) {
      return res.json({ success: false, message: "No images uploaded" });
    }

    const imageFilenames = req.files.map((file) => file.filename);

    
    let sizes = [];
if (Array.isArray(req.body.sizes)) {
  sizes = req.body.sizes.map((s) => s.replace(/[()]/g, "").trim());
} else if (typeof req.body.sizes === "string") {
  sizes = req.body.sizes.replace(/^\[|\]$/g, "").split(",").map((s) => s.trim());
}

let colour = [];
if (Array.isArray(req.body.colour)) {
  colour = req.body.colour.map((c) => c.replace(/[()]/g, "").trim());
} else if (typeof req.body.colour === "string") {
  colour = req.body.colour.replace(/^\[|\]$/g, "").split(",").map((c) => c.trim());
}

    const price = Number(req.body.price);

    
    const Toy = new ToyModel({
      name: req.body.name,
      price: price,
      description: req.body.description,
      category: req.body.category,
      sizes,
      colour,
      Toy_image: imageFilenames[0]
        ? `${req.protocol}://${req.get("host")}/uploads/${imageFilenames[0]}`
        : null,
      Toy_image2: imageFilenames[1]
        ? `${req.protocol}://${req.get("host")}/uploads/${imageFilenames[1]}`
        : null,
      Toy_image3: imageFilenames[2]
        ? `${req.protocol}://${req.get("host")}/uploads/${imageFilenames[2]}`
        : null,
      Toy_image4: imageFilenames[3]
        ? `${req.protocol}://${req.get("host")}/uploads/${imageFilenames[3]}`
        : null,
    });

    await Toy.save();

    
    res.json({
      success: true,
      message: "Toy added successfully",
      toy: Toy,
    });
  } catch (error) {
    console.error("Error in addToy:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
//all toy list

const listToy = async(req,res)=>{
  try {
    const Toys = await ToyModel.find({});
    res.json({success:true,data:Toys})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
  }

}

//remove food
const RemoveToy = async(req,res)=>{
const Toy = await  ToyModel.findById(req.body.id);
fs.unlink(`uploads/${Toy.images}`,()=>{})
await ToyModel.findByIdAndDelete(req.body.id)
res.json({success:true,message:"Toy removed"})
try {
  
} catch (error) {
  console.log(error)
  res.json({success:false,message:"Error"})
}

}


export {addToy,listToy,RemoveToy};
