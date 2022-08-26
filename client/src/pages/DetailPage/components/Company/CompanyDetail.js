const CompanyDetail = ({ details }) => {
  const { name, phone, email, officerName } = details;

  return (
    <div className="border border-gray-200 text-gray-500 font-bold">
      <div className="m-4 flex flex-col gap-6">
        <label className="block text-left rounded-sm text-3xl">Details</label>
        <div className="grid grid-cols-2 gap-4 2xl:grid-cols-1">
          <div className="flex gap-4">
            <label>Name:</label>
            <label>{`${name ? name : ""}`}</label>
          </div>
          <div className="flex gap-4">
            <label>Phone:</label>
            <label>{`${phone ? phone : ""}`}</label>
          </div>
          <div className="flex gap-4">
            <label>Email:</label>
            <label>{`${email ? email : ""}`}</label>
          </div>
          <div className="flex gap-4">
            <label>Officer Name:</label>
            <label>{`${officerName ? officerName : ""}`}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
