

import { useState,  } from "react";
import type { ChangeEvent } from "react";
import type { FormEvent } from "react";
import { Icons } from "../assets/assets";
import { useMutation } from "@tanstack/react-query";
import { AddToy } from "../api/Formdata";




interface ProductData {
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
}

const Addorders: React.FC = () => {
  const [formData, setFormData] = useState<ProductData>({
    name: "",
    price: "",
    description: "",
    category: "",
    sizes: [],
    colour: [],
    Toy_image: null,
    Toy_image2: null,
    Toy_image3: null,
    Toy_image4: null,
  });

  const [previewUrls, setPreviewUrls] = useState({
    Toy_image: "",
    Toy_image2: "",
    Toy_image3: "",
    Toy_image4: "",
    
  });

  const categories = [
   

    "Age 0-1 Years old",
    "Age 1-3 Years old",
    "Age 3-5 Years old",
    "Age 5-8 Years old",
    "Age 8-10 Years old",
    "Age 10+ Years old",
    "For Boys",
    "For Girls",
    "New Arrival",
    "Accessories",
    "Action Figures",
    "Arts & Crafts",
    "Books & Storytellings",
    "Building Sets",
    "Educational Toys",
    "Outdoor & Ride-on",
    "Plush & Soft Toys",
    "Puzzles & Games",
    "Sensory Toys",
    "Vehicles",
    "Wooden Toys",
  ];

  // Generic text/select input handler
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // For color or size (comma-separated)
  const handleListInput = (name: "sizes" | "colour", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value.split(",").map((item) => item.trim()),
    }));
  };

  // Handle each image separately
  const handleImageChange = (key: keyof typeof previewUrls, file: File | null) => {
    setFormData((prev) => ({
      ...prev,
      [key]: file,
    }));

    setPreviewUrls((prev) => ({
      ...prev,
      [key]: file ? URL.createObjectURL(file) : "",
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.price ||
      !formData.description ||
      !formData.category ||
      formData.sizes.length === 0 ||
       formData.colour.length === 0 ||
      !formData.Toy_image||!formData.Toy_image2||!formData.Toy_image3||!formData.Toy_image4
    ) {
      window.alert('Please fill all fields before submitting.');
      return
    }




    
    


    SubmitProduct(formData);
  };

const { mutate: SubmitProduct,  isPending } = useMutation({
    mutationFn: async (data: ProductData) => AddToy(data),
    onSuccess: (data) => {
      console.log('Success:', data)
      window.alert('Product added successfully!')
      setFormData({
        name: "",
        price: "",
        description: "",
        category: "",
        sizes: [],
        colour: [],
        Toy_image: null,
        Toy_image2: null,
        Toy_image3: null,
        Toy_image4: null,
      });
      setPreviewUrls({
        Toy_image: "",
        Toy_image2: "",
        Toy_image3: "",
        Toy_image4: "",
      });
    },

    onError: (error: Error) => {
      console.error('Error:', error)
      window.alert(`Error: ${error.message}`)
    },
  });






  return (
    <div className=" w-[40%] mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name */}
        <input
          name="name"
          type="text"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        {/* Price */}
        <input
          name="price"
          type="number"
          placeholder="price"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 rounded h-24"
          required
        />

        {/* Category dropdown */}
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Sizes */}
        <input
          type="text"
          placeholder="Sizes ( Small, Medium, Large)"
          onChange={(e) => handleListInput("sizes", e.target.value)}
          className="border p-2 rounded"
        />

        {/* Colours */}
        <input
          type="text"
          placeholder="Colours ( Red, Green, Blue)"
          onChange={(e) => handleListInput("colour", e.target.value)}
          className="border p-2 rounded"
        />

        {/* Images - each separate */}
        <div className="grid grid-cols-2 gap-4 mt-4">
  {(["Toy_image", "Toy_image2", "Toy_image3", "Toy_image4"] as const).map(
    (key) => (
      <label
        key={key}
        className="relative flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl h-[200px] cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all bg-center bg-no-repeat bg-[length:60px_60px]"
        style={{
          backgroundImage: previewUrls[key]
            ? `url(${previewUrls[key]})`
            : `url(${Icons.upload_area})`,
          backgroundSize: previewUrls[key] ? "contain" : "70%",
        }}
      >
        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(key, e.target.files?.[0] || null)}
          className="hidden"
        />

        {/* Overlay if preview exists */}
        {previewUrls[key] && (
          <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center opacity-0 hover:opacity-100 transition">
            <span className="text-white text-sm font-semibold">Change</span>
          </div>
        )}
      </label>
    )
  )}
</div>

        <button
  type="submit"
  className={`text-white py-2 rounded-lg mt-6 font-semibold 
    ${isPending 
      ? 'bg-gray-500 cursor-not-allowed' 
      : 'bg-pink-500 hover:bg-pink-600'
    }`}
  disabled={isPending} 
>
  {isPending ? 'Submitting...' : 'Upload Product'}
</button>

      </form>
    </div>
  );
};

export default Addorders;

