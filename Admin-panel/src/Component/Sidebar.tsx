import { Icons } from "../assets/assets"
import { NavLink } from "react-router-dom"
import { useState } from "react"
const Sidebar = () => {
const[Menu, setMenu]=useState("Add items")



  return (
    <div className="border-[1.5px] w-[15%] min-h-screen top-0 border-gray-300">
        <div className="flex flex-col pt-12 pl-6 gap-5">
      <NavLink to="/add"><div  onClick={() => {
            setMenu("Add items")}} className={`flex border-[1px] px-4 py-2 rounded-s cursor-pointer ${
  Menu === "Add items" ? "bg-pink-500 text-white" : "bg-white"
}`}
      >
     <img src={Icons.add_icon} alt="add" className="w-6 h-6"/>
     <p className="mt-1 ml-2">Add items</p>
  </div>
</NavLink>
   <NavLink to="/list"><div onClick={()=>{
    setMenu("List items")
   }} className={`flex border-[1px] px-4 py-2 rounded-s cursor-pointer ${
  Menu === "List items" ? "bg-pink-500 text-white" : "bg-white"
}`}>
     <img src={Icons.order_icon} alt="add" className="w-6 h-6"/>
     <p className="mt-1 ml-2">List items</p>
 </div>
</NavLink>

<NavLink to="/order"> <div onClick={()=>{
    setMenu("Orders")}}
 className={`flex border-[1px] px-4 py-2 rounded-s cursor-pointer ${
  Menu === "Orders" ? "bg-pink-500 text-white" : "bg-white"
}`}>
     <img src={Icons.order_icon} alt="add" className="w-6 h-6"/>
     <p className="mt-1 ml-2">Orders</p>

      </div>
      </NavLink>
</div>

    </div>
  )
}

export default Sidebar
