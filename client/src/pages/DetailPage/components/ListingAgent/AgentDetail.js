const AgentDetail = ({ details }) => {
  const { licenseNumber, licenseState } = details;

  return (
    <div className="border border-gray-200 text-gray-500 font-bold">
      <div className="m-4 flex flex-col gap-6">
        <label className="block text-left rounded-sm text-3xl">Details</label>
        <div className="grid grid-cols-2 gap-4 2xl:grid-cols-1">
          <div className="flex gap-4">
            <label>License Number:</label>
            <label>{`${licenseNumber ? licenseNumber : ""}`}</label>
          </div>
          <div className="flex gap-4">
            <label>License State:</label>
            <label>{`${licenseState ? licenseState : ""}`}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetail;
