import Insta from "../../components/Insta";
import USP from "../../components/USP";
import Banner from "./Banner/Banner";
import BoorivaStore from "./BoorivaStore/BoorivaStore";
import Categories from "./Categories";
import InfiniteMarquee from "./InfiniteMarquee";
import NewItems from "./NewItems/NewItems";
import TopProducts from "./TopProducts/TopProducts";

const Home = ({ savedData, setSavedData }) => {
  return (
    <div>
      <Categories />
      <NewItems savedData={savedData} setSavedData={setSavedData} />
      <Banner />
      <BoorivaStore />
      <InfiniteMarquee />
      <TopProducts savedData={savedData} setSavedData={setSavedData} />
      <USP />
      <Insta />
    </div>
  );
};

export default Home;
