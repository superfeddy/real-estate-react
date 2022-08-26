import HomeDetail from "./HomeDetail";
import { AddressForm, User } from "../Common";
import { formatCurrency } from "../../../../utils";

const Property = ({ currentHome }) => {
  return (
    <div className="mt-4 mr-4 flex flex-col w-full gap-4 border border-gray-300 p-8">
      <div className="text-gray-500 font-bold text-4xl">Property</div>
      <AddressForm address={currentHome.property.address} />
      <HomeDetail
        details={{
          propertyType: currentHome.property.propertyType,
          squareFeet: currentHome.property.squareFeet,
          numberBedrooms: currentHome.property.numberBedrooms,
          numberBaths: currentHome.property.numberBaths,
          state: currentHome.state,
          price: formatCurrency(currentHome.price),
        }}
      />
      <User
        user={currentHome.property.primaryOwner.user}
        type={currentHome.property.ownerType}
      />
    </div>
  );
};

export default Property;
