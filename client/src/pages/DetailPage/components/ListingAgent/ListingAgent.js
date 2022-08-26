import { User } from "../Common";
import AgentDetail from "./AgentDetail";

const ListingAgent = ({ currentHome, title }) => {
  return (
    <div className="mt-4 mr-4 flex flex-col w-full gap-4 border border-gray-300 p-8">
      <div className="text-gray-500 font-bold text-4xl">Listing Agent</div>
      <User user={currentHome.listingAgent.user} />
      <AgentDetail
        details={{
          licenseNumber: currentHome.listingAgent.licenseNumber,
          licenseState: currentHome.listingAgent.licenseState,
        }}
      />
    </div>
  );
};

export default ListingAgent;
