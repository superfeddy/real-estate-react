const HomeDetail = ({ details }) => {
  const {
    propertyType,
    squareFeet,
    numberBedrooms,
    numberBaths,
    state,
    price,
  } = details;

  return (
    <div className="border border-gray-200 text-gray-500 font-bold">
      <div className="m-4 flex flex-col gap-6">
        <label className="block text-left rounded-sm text-3xl">Details</label>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex gap-4">
            <label>Property Type:</label>
            <label>{`${propertyType ? propertyType : ""}`}</label>
          </div>
          <div className="flex gap-4">
            <label>squareFeet:</label>
            <label>{`${squareFeet ? squareFeet : ""}`}</label>
          </div>
          <div className="flex gap-4">
            <label>numberBedrooms:</label>
            <label>{`${numberBedrooms ? numberBedrooms : ""}`}</label>
          </div>
          <div className="flex gap-4">
            <label>numberBaths:</label>
            <label>{`${numberBaths ? numberBaths : ""}`}</label>
          </div>
          <div className="flex gap-4">
            <label>state:</label>
            <label>{`${state ? state : ""}`}</label>
          </div>
          <div className="flex gap-4">
            <label>price:</label>
            <label>{`${price ? price : ""}`}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDetail;
