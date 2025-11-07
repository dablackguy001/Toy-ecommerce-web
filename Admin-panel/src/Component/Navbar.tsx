import { Icons } from "../assets/assets"

const Navbar = () => {
  return (
    <div>
        <div className="flex justify-between px-8 py-4">
        <img src={Icons.Logo2} alt="Logo"  className="w-24 h-24"/>
       <img src={Icons.profile_image} alt="image" className="w-12 h-12 mt-4"/>
       
       </div>
    </div>
  )
}

export default Navbar
