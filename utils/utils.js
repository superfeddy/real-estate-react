const filter = (home, query) => {
  const { city, minPrice, maxPrice, numberBedrooms } = query;
  let match = true; // filter value

  // filter city
  if (city) {
    match = home.property.address.city
      .toLowerCase()
      .includes(city.toLowerCase());
    if (!match) return false;
  }

  // filter numberBedrooms
  if (numberBedrooms) {
    match = numberBedrooms == home.property.numberBedrooms;
    if (!match) return false;
  }

  // filter minPrice
  if (minPrice) {
    match = Number(home.price) >= Number(minPrice);
    if (!match) return false;
  }

  // filter maxPrice
  if (maxPrice) {
    match = Number(home.price) <= Number(maxPrice);
    if (!match) return false;
  }

  return match;
};

// get home data for displaying the list
const getGridData = (home) => {
  return {
    id: home.id,
    description: home.property.description,
    price: home.price,
    image: home.property.primaryImageUrl,
  };
};

module.exports = {
  filter,
  getGridData,
};
