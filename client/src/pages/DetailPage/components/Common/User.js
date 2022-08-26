const User = ({ user, type }) => {
  const { firstName, lastName, email, phone } = user;

  return (
    <div className="border border-gray-200 text-gray-500 font-bold">
      <div className="m-4 flex flex-col gap-6">
        <label className="block text-left rounded-sm text-3xl">User</label>
        <div className="grid grid-cols-2 gap-4 2xl:grid-cols-1">
          <div className="flex gap-4">
            <label>First Name:</label>
            <label>{`${firstName ? firstName : ""} `}</label>
          </div>
          <div className="flex gap-4">
            <label>Last Name:</label>
            <label>{`${lastName ? lastName : ""}`}</label>
          </div>
          <div className="flex gap-4">
            <label>Email:</label>
            <label>{`${email ? email : ""}`}</label>
          </div>
          <div className="flex gap-4">
            <label>Phone:</label>
            <label>{`${phone ? phone : ""}`}</label>
          </div>
          <div className="flex gap-4">
            <label>Owner Type:</label>
            <label>{`${type ? type : ""}`}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
