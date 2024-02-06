import Insta from "../../components/Insta";
import USP from "../../components/USP";
import Banner from "./Banner/Banner";
import BoorivaStore from "./BoorivaStore/BoorivaStore";
import Categories from "./Categories";
import InfiniteMarquee from "./InfiniteMarquee";
import NewItems from "./NewItems/NewItems";
import TopProducts from "./TopProducts/TopProducts";

const Home = () => {
  return (
    <div>
      <Categories />
      <NewItems/>
      <Banner />
      <BoorivaStore />
      <InfiniteMarquee />
      <TopProducts/>
      <USP />
      <Insta />
    </div>
  );
};

export default Home;
