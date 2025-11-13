import axios from "axios";
import { BASE_URL } from "./constant";

export const AddToy = async (data: {
  name: string;
  price: string;
  description: string;
  category: string;
  sizes: string[];
  colour: string[];
  Toy_image: File | null;
  Toy_image2: File | null;
  Toy_image3: File | null;
  Toy_image4: File | null;
}) => {
  // ✅ Create a new FormData instance
  const formData = new FormData();

  // Append text fields
  formData.append("name", data.name);
  formData.append("price", data.price);
  formData.append("description", data.description);
  formData.append("category", data.category);

  // Append array fields
  data.sizes.forEach((s) => formData.append("sizes[]", s));
  data.colour.forEach((c) => formData.append("colour[]", c));

  // Append image files
  if (data.Toy_image) formData.append("images", data.Toy_image);
if (data.Toy_image2) formData.append("images", data.Toy_image2);
if (data.Toy_image3) formData.append("images", data.Toy_image3);
if (data.Toy_image4) formData.append("images", data.Toy_image4);


  // ✅ Send FormData without setting Content-Type manually
  const response = await axios.post(`${BASE_URL}/api/Toy/add`, formData);

  return response.data;
};




