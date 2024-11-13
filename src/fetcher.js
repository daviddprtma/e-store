const BASE_URL = "http://localhost:3001";

export const fetcher = async (url) => {
  let responseError = { errorMessage: "", data: [] };
  try {
    const response = await fetch(BASE_URL + url);
    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}`);
    }
    const responseData = await response.json();
    responseError.errorMessage = "";
    responseError.data = responseData;
    return responseError;
  } catch (e) {
    responseError.errorMessage = e.message;
    return responseError;
  }
};

export const getCategories = () => {
  return fetcher("/categories");
};

export const getProducts = (id) => {
  return fetcher("/products?catId=" + id);
};

export const getProductsById = (id) => {
  return fetcher("/products/" + id);
};