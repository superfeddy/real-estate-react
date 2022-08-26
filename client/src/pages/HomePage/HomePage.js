// External Dependencies

// Internal Dependencies
import Search from "../../components/Search";
import HomeList from "./HomeList";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-8">
      <Search />
      <HomeList />
    </div>
  );
};

export default HomePage;
