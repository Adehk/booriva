import Insta from "../../components/Insta";
import USP from "../../components/USP";
import Banner from "./Banner";
import Categories from "./Categories";
import InfiniteMarquee from "./InfiniteMarquee";
import NewItems from "./NewItems/NewItems";

const Home = () => {
  return (
    <div>
      <Categories />
      <NewItems />
      <Banner />
      <InfiniteMarquee />
      <USP />
      <Insta />
    </div>
  );
};

export default Home;
