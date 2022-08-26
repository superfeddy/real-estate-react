// External Dependencies
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";

// Internal Dependencies
import { BedIcon, CityIcon } from "../../assets/icons";
import { filterHomes } from "../../reducers/homeReducer";
import "./style.css";

const Search = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams();

  const [city, setCity] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [numberBedrooms, setNumberBedrooms] = useState("");

  // query the homes
  useEffect(() => {
    dispatch(filterHomes(query.toString()));
  }, [query]);

  // restore the filter fields
  useEffect(() => {
    if (query.get("city")) setCity(query.get("city"));
    if (query.get("minPrice")) setMinPrice(query.get("minPrice"));
    if (query.get("maxPrice")) setMaxPrice(query.get("maxPrice"));
    if (query.get("numberBedrooms"))
      setNumberBedrooms(query.get("numberBedrooms"));
  }, []);

  // handle the debounce
  const debounceHandler = debounce((e) => {
    query.set(e.target.name, e.target.value);
    setQuery(query);
  }, 300);

  // handle input change
  const handleChange = (e) => {
    switch (e.target.name) {
      case "city":
        setCity(e.target.value);
        break;
      case "minPrice":
        setMinPrice(e.target.value);
        break;
      case "maxPrice":
        setMaxPrice(e.target.value);
        break;
      case "numberBedrooms":
        setNumberBedrooms(e.target.value);
        break;
      default:
        break;
    }
    debounceHandler(e);
  };

  return (
    <div className="p-6 gap-6 mt-4 mx-auto">
      <div className="flex gap-4 lg:flex-col">
        <div className="flex flex-col border p-2">
          <div className="flex items-center p-2 ">
            <label
              htmlFor="city"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              City
            </label>
          </div>
          <div className="flex border rounded bg-gray-300 items-center p-2 ">
            <CityIcon />
            <input
              type="text"
              name="city"
              placeholder="Enter text here..."
              className="bg-gray-300 focus:outline-none text-gray-700"
              value={city}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex gap-4 border border-gray-200 p-2 rounded xs:flex-col">
          <div className="flex flex-col">
            <div className="flex items-center p-2 ">
              <label
                htmlFor="minPrice"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                minPrice
              </label>
            </div>
            <div className="flex border rounded bg-gray-300 items-center p-2 ">
              <input
                type="number"
                name="minPrice"
                placeholder="Enter text here..."
                className="bg-gray-300 focus:outline-none text-gray-700"
                value={minPrice}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center p-2 ">
              <label
                htmlFor="maxPrice"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                maxPrice
              </label>
            </div>
            <div className="flex border rounded bg-gray-300 items-center p-2 ">
              <input
                type="number"
                name="maxPrice"
                placeholder="Enter text here..."
                className="bg-gray-300 focus:outline-none text-gray-700"
                value={maxPrice}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-gray-200 p-2 rounded">
          <div className="flex items-center p-2 ">
            <label
              htmlFor="numberBedrooms"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              Number of Bedrooms
            </label>
          </div>
          <div className="flex border rounded bg-gray-300 items-center p-2 ">
            <BedIcon />
            <input
              type="number"
              name="numberBedrooms"
              placeholder="Enter text here..."
              className="bg-gray-300 focus:outline-none text-gray-700"
              value={numberBedrooms}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
