import CompanyDetail from "./CompanyDetail";
import { AddressForm } from "../Common";

const Company = ({ detail, title }) => {
  return (
    <div className="mt-4 mr-4 flex flex-col w-full gap-4 border border-gray-300 p-8">
      <div className="text-gray-500 font-bold text-4xl">{title}</div>
      <AddressForm address={detail.address} />
      <CompanyDetail
        details={{
          name: detail.name,
          phone: detail.phone,
          email: detail.email,
          officerName: detail.officerName,
        }}
      />
    </div>
  );
};

export default Company;
