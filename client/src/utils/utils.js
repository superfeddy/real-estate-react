// format currency by default
export const formatCurrency = (num) => {
  let fiatFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return fiatFormatter.format(parseFloat(num.toFixed(8)));
};
