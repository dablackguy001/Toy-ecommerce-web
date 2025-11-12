import { Route, Routes } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Sidebar from "./Component/Sidebar"
import Addorder from "./Pages/Addorder"
import Orders from "./Pages/Order"
import List from "./Pages/List"

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr/>
      <div className="flex">
      <Sidebar/>
<Routes>

  <Route path="/add" element={<Addorder/> }/>
  <Route path="/list" element={<List/> }/>
  <Route path="/order" element={<Orders/> }/>
              

</Routes>
</div>
    </div>
  )
}

export default App

