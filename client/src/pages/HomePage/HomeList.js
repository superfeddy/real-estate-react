// External Dependencies
import { useSelector } from "react-redux";

// Internal Dependencies
import HomeItem from "./HomeItem";
import fetchStatus from "../../constants/types";

const HomeList = () => {
  const { homes, status } = useSelector((state) => state.homes);

  return status === fetchStatus.LOADING ? (
    <div className="text-center">Loading...</div>
  ) : status === fetchStatus.FAILED ? (
    <div className="text-center">Something went wrong.</div>
  ) : homes && homes.length > 0 ? (
    <div className="mx-auto w-11/12 grid grid-cols-3 lg:grid-cols-1">
      {homes.map((home) => (
        <HomeItem key={home.id} home={home} />
      ))}
    </div>
  ) : (
    <div className="text-center">No homes found.</div>
  );
};

export default HomeList;
