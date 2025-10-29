import images, { Toy_list, category_list, theme_list } from "../assets/asset";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartShopping,
  faCircleUser,
  faChevronDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { StoreContext } from "../Context/Storecontext";

const Navbarr = () => {
  const [Menu, setMenu] = useState("Home");
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [ShowThemeDropdown, setShowThemeDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const store = useContext(StoreContext);
  const Cartitems = store?.Cartitems;
  const totalCartItems = Object.values(Cartitems || {}).reduce(
    (sum: number, item: { quantity?: number } | undefined) =>
      sum + (item?.quantity ?? 0),
    0
  );

  const filteredItems = Toy_list.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categoryRoutes: { [key: string]: string } = {
    "Age 0-1 Years old": "/Age0to1categories",
    "Age 1-3 Years old": "/Age1to3categories",
    "Age 3-5 Years old": "/Age3to5categories",
    "Age 5-8 Years old": "/Age5to8categories",
    "Age 8-10 Years old": "/Age8to10categories",
    "Age 10+ Years old": "/Age10upcategories",
    "For Boys": "/forBoys",
    "For Girls": "/forGirls",
    "New Arrival": "/newArrival",
    "Accessories": "/accessories",
    "Action Figures": "/actionfigures",
    "Arts & Crafts": "/artsandcrafts",
    "Books & Storytellings": "/booksandstorytelling",
    "Building Sets": "/buildingset",
    "Educational Toys": "/educationaltoys",
    "Outdoor & Ride-on": "/outdoorandrideon",
    "Plush & Soft Toys": "/plushandsofttoys",
    "Puzzles & Games": "/puzzlesandgames",
    "Sensory Toys": "/sensorytoys",
    "Vehicles": "/vehiclescategories",
    "Wooden Toys": "/Woodentoys",
  };

  const themeRoutes: { [key: string]: string } = {
    "Stem & Learning": "/stemandlearning",
    "Sport & Active": "/sportandactive",
    "Musical & Sounds": "/musicalandsounds",
    "Seasonal & Party": "/seasonalandparty",
  };

  const getCategoryRoute = (name: string) => categoryRoutes[name] || "/";
  const getThemeRoute = (name: string) => themeRoutes[name] || "/";

  return (
    <nav className="flex justify-between items-center px-4 sm:px-8 py-4 bg-white shadow-md relative z-50">
      {/* Logo */}
      <img
        src={images.Logo2}
        alt="logo"
        className="w-24 sm:w-28 h-auto ml-2 sm:ml-8"
      />

      {/* Hamburger icon for mobile */}
      <div className="md:hidden mr-20 ">
        <FontAwesomeIcon
          icon={menuOpen ? faTimes : faBars}
          className="text-2xl text-gray-700 cursor-pointer "
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Menu links */}
      <ul
        className={`absolute md:static top-[80px] left-0 w-full md:w-auto bg-white  md:bg-transparent flex flex-col md:flex-row items-center gap-6 font-medium text-gray-700 transition-all duration-300 ${
          menuOpen
            ? "max-h-[80vh] opacity-100 visible overflow-y-auto z-50"
            : "max-h-0 opacity-0 invisible md:max-h-none md:opacity-100 md:visible"
        }`}
      >
        <Link
          to="/"
          onClick={() => {
            setMenu("Home");
            setMenuOpen(false);
          }}
          className={Menu === "Home" ? "text-pink-600" : ""}
        >
          Discover
        </Link>

        {/* Categories Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            className={`flex items-center gap-1 cursor-pointer ${
              Menu === "Categories" ? "text-pink-600" : ""
            }`}
          >
            Categories
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`text-sm transition-transform ${
                showCategoryDropdown ? "rotate-180" : ""
              }`}
            />
          </button>
          {showCategoryDropdown && (
            <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg w-48 z-50">
              {category_list.map((category, idx) => (
                <Link
                  to={getCategoryRoute(category.categoryname)}
                  key={idx}
                  className="block px-4 py-2 hover:bg-pink-100 text-gray-700 hover:text-pink-600"
                  onClick={() => {
                    setShowCategoryDropdown(false);
                    setMenuOpen(false);
                    setMenu("Categories");
                  }}
                >
                  {category.categoryname}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Shop By Theme Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowThemeDropdown(!ShowThemeDropdown)}
            className={`flex items-center gap-1 cursor-pointer ${
              Menu === "Shop By Theme" ? "text-pink-600" : ""
            }`}
          >
            Shop By Theme
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`text-sm transition-transform ${
                ShowThemeDropdown ? "rotate-180" : ""
              }`}
            />
          </button>
          {ShowThemeDropdown && (
            <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg w-48 z-50">
              {theme_list.map((theme, idx) => (
                <Link
                  to={getThemeRoute(theme.categoryname)}
                  key={idx}
                  className="block px-4 py-2 hover:bg-pink-100 text-gray-700 hover:text-pink-600"
                  onClick={() => {
                    setShowThemeDropdown(false);
                    setMenuOpen(false);
                    setMenu("Shop By Theme");
                  }}
                >
                  {theme.categoryname}
                </Link>
              ))}
            </div>
          )}
        </div>

        <a
          href="#Offers"
          onClick={() => {
            setMenu("Offers");
            setMenuOpen(false);
          }}
          className={Menu === "Offers" ? "text-pink-600" : ""}
        >
          Offers
        </a>

        <Link
          to="/visionmission"
          onClick={() => {
            setMenu("Blog");
            setMenuOpen(false);
          }}
          className={Menu === "Blog" ? "text-pink-600" : ""}
        >
          Blog
        </Link>
      </ul>

      {/* Right icons */}
     <div className="flex items-center gap-4 sm:gap-6 md:gap-8 mr-4 sm:mr-6 relative">
  {/* Search icon & input */}
  <div className="relative">
    <FontAwesomeIcon
      icon={faSearch}
      className="text-gray-600 text-xl sm:text-2xl cursor-pointer"
      onClick={() => setShowSearchInput(!showSearchInput)}
    />

    {showSearchInput && (
      <div className="mb-4 absolute top-10 right-0 sm:right-auto sm:left-[-120px] md:left-[-180px] z-50">
        <input
          type="text"
          className=" bg-pink-100 focus:bg-pink-200 border border-gray-300 px-3 sm:px-4 py-2 rounded-2xl w-[180px] sm:w-[220px] md:w-[260px] focus:outline-none placeholder-gray-600 shadow-md"
          placeholder="Search toys..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowResults(true);
          }}
        />

        {/* Search Results Dropdown */}
        {showResults && searchTerm && (
          <ul className=" absolute bg-white border rounded-lg shadow-lg w-full max-h-60 overflow-y-auto mt-1">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <Link
                  to={`/product/${item._id}`}
                  key={item._id}
                  className="block p-2 hover:bg-pink-100"
                  onClick={() => {
                    setSearchTerm("");
                    setShowResults(false);
                    setShowSearchInput(false);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.Toy_image}
                      alt={item.name}
                      className="w-10 h-10 object-contain"
                    />
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-600">£{item.price}</p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <li className="p-2 text-gray-500">No results found</li>
            )}
          </ul>
        )}
      </div>
    )}
  </div>

  {/* Cart icon */}
  <Link to="/Cart" className="relative">
    <FontAwesomeIcon
      icon={faCartShopping}
      className="text-xl sm:text-2xl text-gray-700 cursor-pointer"
    />
    {totalCartItems > 0 && (
      <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-600 rounded-full" />
    )}
  </Link>

  {/* User icon */}
  <Link to="/Login">
    <FontAwesomeIcon
      icon={faCircleUser}
      className="text-xl sm:text-2xl text-gray-700 cursor-pointer"
    />
  </Link>
</div>
    </nav>
  );
};

export default Navbarr;


