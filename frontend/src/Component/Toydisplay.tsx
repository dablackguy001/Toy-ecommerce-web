import  { useContext } from 'react'
import { StoreContext } from "../Context/Storecontext";
import ToyItem from './ToyItem'
import images from '../assets/asset';

interface ToydisplayProps {
  category: string;
}

const Toydisplay: React.FC<ToydisplayProps> = ({ category }) => {
  const store = useContext(StoreContext);
  const Toy_list = store?.Toy_list || [];

  
  const filteredToys = Toy_list.filter(
    (item) => category === "All" || item.category === category
  );

  return (
    <div id="product">
      
      <h2 className="text-2xl font-bold mt-8 ml-8 mb-8 bg-gradient-to-r from-pink-100 to-blue-500 shadow-md rounded-2xl px-4 py-2 w-80">Shop From Varieties</h2>

      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mt-10 justify-center mx-auto w-11/12  ">
        {filteredToys.length > 0 ? (
          filteredToys.map((item) => (
            
           
              <ToyItem
                _id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                Toy_image={item.Toy_image}
              />
            
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No items found in this category.
          </p>
        )}
      </div>

      <hr className="mt-10" />
          <hr className='mt-4'/>

<div className='text-2xl font-medium flex justify-center mt-8'>
  <p>Instagram Post</p> </div>

<div className='flex justify-center gap-8 flex-wrap mt-8 mb-8 '>
  <div className=' flex items-center justify-center border-[1px] w-[300px] h-[240px] my-8 rounded-xl bg-pink-500'>
    <img  src={images.babytoy} className='flex items-center justify-center w-60 h-auto'/>
  </div>
<div className=' flex items-center justify-center border-[1px] w-[300px] h-[240px] my-8 rounded-xl bg-pink-500'>
    <img src={images.babytoy} className='flex items-center justify-center w-60 h-auto'/>
  </div>

  <div className=' flex items-center justify-center border-[1px] w-[300px] h-[240px] my-8 rounded-xl bg-pink-500'>
    <img  src={images.babytoy} className='flex items-center justify-center w-60 h-auto'/>
  </div>

<div className='  flex items-center justify-center border-[1px] w-[300px] h-[240px] my-8 rounded-xl bg-pink-500'>
    <img  src={images.babytoy} className='flex items-center justify-center w-60 h-auto'/>
  </div>




</div>
</div>

       
        

        
    
  )
}

export default Toydisplay
