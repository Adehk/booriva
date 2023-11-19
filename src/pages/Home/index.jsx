import Insta from "../../components/Insta";
import USP from "../../components/USP";
import Banner from "./Banner/Banner";
import BoorivaStore from "./BoorivaStore/BoorivaStore";
import Categories from "./Categories";
import InfiniteMarquee from "./InfiniteMarquee";
import NewItems from "./NewItems/NewItems";

const Home = () => {
  return (
    <div>
      <Categories />
      <NewItems />
      <Banner />
      <BoorivaStore />
      <InfiniteMarquee />
      <USP />
      <Insta />
    </div>
  );
};

export default Home;
