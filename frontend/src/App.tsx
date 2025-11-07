import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Cart from "./pages/Cart.tsx";
import Placeorder from "./pages/Placeorder.tsx";
import Footer from "./Component/Footer.tsx";
import Navbarr from "./Component/Navbarr.tsx";
import Login from "./pages/Login.tsx";
import Productdetails from "./pages/Productdetails.tsx";
import { useEffect, useState } from "react";
import Allcategories from "./pages/Allcategories.tsx";
import Forboys from "./pages/Forboys.tsx";
import Forgirls from "./pages/Forgirls.tsx";
import Age0to1categories from "./pages/Age0to1categories.tsx";
import Age1to3categories from "./pages/Age1to3categories.tsx";
import Age10upcategories from "./pages/Age10upcategories.tsx";
import Age3to5categories from "./pages/Age3to5categories.tsx";
import Age5to8categories from "./pages/Age5to8categories.tsx";
import Age8to10categories from "./pages/Age8to10categories.tsx";
import VisionMission from "./pages/VisionMission.tsx";
import Newarrival from "./Component/Newarrival.tsx";
import Accessories from "./pages/Accessories.tsx";
import Actionfigures from "./pages/Actionfigures.tsx";
import Artandcraft from "./pages/Artsandcraft.tsx";
import Booksandstory from "./pages/Booksandstory.tsx";
import Buildingsets from "./pages/Buildingset.tsx";
import Educationaltoys from "./pages/Educationaltoys.tsx";
import Outdoorandrideon from "./pages/Outdoorandrideon.tsx";
import PlushandSofttoys from "./pages/Plushandsofttoys.tsx";
import Puzzleandgames from "./pages/puzzlesandgames.tsx";
import Sensorytoys from "./pages/Sensorytoys.tsx";
import Vehiclescategories from "./pages/vehiclescategories.tsx";
import Woodentoys from "./pages/Woodentoys.tsx";
import Seasonalandparty from "./pages/Seasonalandparty.tsx";
import Musicalandsound from "./pages/Musicalandsound.tsx";
import Sportandactive from "./pages/Sportandactive.tsx";
import Stemandlearning from "./pages/Stemandlearning.tsx";




const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainLayout = ({
  children,
  
}: {
  children: React.ReactNode;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="bg-pink-200 flex justify-center">
      <div className="border w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] h-auto bg-white  sm: shadow-sm">
        <Navbarr />
        {children}
        <Footer />
      </div>
    </div>
  );
};

const App = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/Login" element={<Login />} />

        <Route
          path="/"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Home category={category} setCategory={setCategory} />
            </MainLayout>
          }
        />

        <Route
          path="/Cart"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Cart />
            </MainLayout>
          }
        />

        <Route
          path="/Placeorder"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Placeorder />
            </MainLayout>
          }
        />

        <Route
          path="/product/:id"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Productdetails />
            </MainLayout>
          }
        />

        <Route
          path="/Allcategories"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Allcategories />
            </MainLayout>
          }
        />

        <Route
          path="/forBoys"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Forboys />
            </MainLayout>
          }
        />

        <Route
          path="/forGirls"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Forgirls />
            </MainLayout>
          }
        />

        <Route
          path="/Age0to1categories"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Age0to1categories />
            </MainLayout>
          }
        />

        <Route
          path="/Age1to3categories"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Age1to3categories />
            </MainLayout>
          }
        />

        <Route
          path="/Age3to5categories"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Age3to5categories />
            </MainLayout>
          }
        />

        <Route
          path="/Age5to8categories"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Age5to8categories />
            </MainLayout>
          }
        />

        <Route
          path="/Age8to10categories"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Age8to10categories />
            </MainLayout>
          }
        />

        <Route
          path="/Age10upcategories"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Age10upcategories />
            </MainLayout>
          }
        />

<Route
          path="/visionmission"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <VisionMission/>
            </MainLayout>
          }
        />
<Route
          path="/newArrival"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Newarrival/>
            </MainLayout>
          }
        />


<Route
          path="/accessories"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Accessories/>
            </MainLayout>
          }
        />


        <Route
          path="/actionfigures"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Actionfigures/>
            </MainLayout>
          }
        />

        <Route
          path="/artsandcrafts"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Artandcraft/>
            </MainLayout>
          }
        />

        <Route
          path="/booksandstorytelling"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Booksandstory/>
            </MainLayout>
          }
        />

        <Route
          path="/buildingset"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Buildingsets/>
            </MainLayout>
          }
        />

        <Route
          path="/educationaltoys"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Educationaltoys/>
            </MainLayout>
          }
        />

        <Route
          path="/outdoorandrideon"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Outdoorandrideon/>
            </MainLayout>
          }
        />

        <Route
          path="/plushandsofttoys"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <PlushandSofttoys/>
            </MainLayout>
          }
        />

        <Route
          path="/puzzlesandgames"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Puzzleandgames/>
            </MainLayout>
          }
        />

        <Route
          path="/sensorytoys"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Sensorytoys/>
            </MainLayout>
          }
        />

        <Route
          path="/vehiclescategories"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Vehiclescategories/>
            </MainLayout>
          }
        />

        <Route
          path="/woodentoys"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Woodentoys/>
            </MainLayout>
          }
        />



        <Route
          path="/stemandlearning"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Stemandlearning/>
            </MainLayout>
          }
        />

        <Route
          path="/sportandactive"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Sportandactive/>
            </MainLayout>
          }
        />

        <Route
          path="/musicalandsounds"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Musicalandsound/>
            </MainLayout>
          }
        />

        <Route
          path="/seasonalandparty"
          element={
            <MainLayout category={category} setCategory={setCategory}>
              <Seasonalandparty/>
            </MainLayout>
          }
        />


      </Routes>
    </>
  );
};

export default App;

