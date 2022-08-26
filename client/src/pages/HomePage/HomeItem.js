import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils";
const HomeItem = ({ home }) => {
  const { id, price, description, image } = home;

  return (
    <div className="w-full p-2 flex flex-col gap-2 relative">
      <img
        alt="gallery"
        className="block object-cover object-center w-full h-full rounded-lg"
        src={image}
      />
      <div className="absolute top-4 left-4 text-lg bg-black opacity-70 p-2 text-center rounded-md text-white xs:text-xs xs:top-2 xs:left-2">
        <p>{formatCurrency(price)}</p>
      </div>
      <div className="absolute top-4 right-4 bg-black opacity-50 hover:opacity-80 text-white text-center px-3 py-1.5 text-4xl rounded-md xs:text-2xl xs:top-2 xs:right-2">
        <Link to={`/${id}`}>Details</Link>
      </div>
      <div className="text-center text-xl font-bold">{description}</div>
    </div>
  );
};

export default HomeItem;
