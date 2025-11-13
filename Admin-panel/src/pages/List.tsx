import { useState } from "react"



const List = () => {

const [list,setlist]=useState([])


  return (
    <div className="w-[80%] pt-10 pl-10 justify-center items-center ">
  <p className=" text-3xl font-bold text-gray-700">All Food List</p>
  <div className="grid grid-cols-5 gap-8 px-6 py-4 mt-8 text-xl border-[1px] ">
<b>image</b>
<b>Name</b>
<b>category</b>
<b>price</b>
<b>Action</b>
  </div>

{list.map((item,index)=>{

  return(
    <div key={index}>
 <img src={item.image}/>
 <p>{item.name}</p>
 <p>{item.category}</p>
 <p>{item.price}</p>
 <p>X</p>

      
    </div>
  )

})}
      
    </div>
  )
}

export default List
