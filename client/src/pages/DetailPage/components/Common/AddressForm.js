const AddressForm = ({ address }) => {
  const { addressLine1, addressLine2, city, state, zip } = address;

  return (
    <div className="border border-gray-200 text-gray-500 font-bold">
      <div className="m-4 flex flex-col gap-6">
        <label className="block text-left rounded-sm text-3xl">Address</label>
        <div className="grid grid-cols-2 gap-4 2xl:grid-cols-1">
          <div className="flex gap-4">
            <label>Address Line:</label>
            <label>{`${addressLine1 ? addressLine1 : ""} ${
              addressLine2 ? addressLine2 : ""
            }`}</label>
          </div>
          <div className="flex gap-4">
            <label>City:</label>
            <label>{`${city ? city : ""}`}</label>
          </div>
          <div className="flex gap-4">
            <label>State:</label>
            <label>{`${state ? state : ""}`}</label>
          </div>
          <div className="flex gap-4">
            <label>Zip:</label>
            <label>{`${zip ? zip : ""}`}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
