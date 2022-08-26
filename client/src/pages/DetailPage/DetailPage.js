// External Dependencies
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

// Internal Dependencies
import fetchStatus from "../../constants/types";
import { fetchHomeById } from "../../reducers/homeReducer";
import Company from "./components/Company";
import ListingAgent from "./components/ListingAgent";
import Property from "./components/Property";

const DetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentHome, status } = useSelector((state) => state.homes);

  // fetch the home by id
  useEffect(() => {
    dispatch(fetchHomeById(params.id));
  }, [params]);

  return status === fetchStatus.LOADING ? (
    <div className="text-center mt-4">Loading...</div>
  ) : status === fetchStatus.COMPLETED && currentHome.id ? (
    <div className="w-screen h-screen mt-4 flex flex-col gap-4">
      <div className="flex w-full gap-4 lg:flex-col lg:p-4">
        <img
          src={currentHome.property.primaryImageUrl}
          alt={currentHome.property.description}
          className="m-4 w-3/5 block object-cover object-center rounded-lg lg:w-full lg:mx-auto"
        />
        <div className="w-full mr-4">
          <div className="text-lg bg-black opacity-60 hover:opacity-80 p-2 text-center rounded-md text-white w-24 mt-4">
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
          <Property currentHome={currentHome} />
        </div>
      </div>
      <div className="flex gap-4 m-4 mr-0 lg:flex-col pb-4">
        <div className="flex flex-row justify-around w-full">
          <Company
            detail={currentHome.escrowCompany}
            title={"Escrow Company"}
          />
        </div>
        <div className="flex flex-row justify-around w-full">
          <Company detail={currentHome.titleCompany} title={"Title Company"} />
        </div>
        <div className="flex flex-row justify-around w-full">
          <ListingAgent currentHome={currentHome} />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default DetailPage;
