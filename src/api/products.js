import _httpService from "../services/http";

const productListing = async (filters) => {
  const res = await _httpService.get(" https://dummyjson.com/product", {
    params: filters,
  });
  return res;
};

export default productListing;
