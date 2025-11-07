import Header from "../Component/Header";


import Categoriesbyages from "../Component/Categoriesbyages";
import Newarrival from "../Component/Newarrival";
import BoyandgirlsCategories from "../Component/BoyandgirlsCategories";
import Generalcategories from "../Component/Generalcategories";


interface HomeProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Home: React.FC<HomeProps> = () => {
  return (
    <div id="Home">
      
      <Header />
      
      <Categoriesbyages/>
      <Newarrival/>
      <BoyandgirlsCategories/>
      <Generalcategories/>
      
      
    </div>
  );
};

export default Home;
