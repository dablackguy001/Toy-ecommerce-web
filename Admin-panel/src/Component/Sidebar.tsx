import { Icons } from "../assets/assets"


const Sidebar = () => {
  return (
    <div className="border-[1.5px] w-[15%] h-[100vh] top-0 border-gray-300">
        <div className="flex flex-col pt-12 pl-6 gap-5">
      <div className="flex border-[1px] px-4 py-2 rounded-s cursor-pointer">
     <img src={Icons.add_icon} alt="add" className="w-6 h-6"/>
     <p className="mt-1 ml-2">Add items</p>
  </div>

 <div className="flex border-[1px] px-4 py-2 rounded-s cursor-pointer">
     <img src={Icons.order_icon} alt="add" className="w-6 h-6"/>
     <p className="mt-1 ml-2">List items</p>
 </div>

 <div className="flex border-[1px] px-4 py-2 rounded-s cursor-pointer">
     <img src={Icons.order_icon} alt="add" className="w-6 h-6"/>
     <p className="mt-1 ml-2">Orders</p>

      </div>
</div>

    </div>
  )
}

export default Sidebar
