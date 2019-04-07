export const getStockData = payload => {
  return {
    type: "GET_STOCK_DATA",
    payload
  };
};

export default getStockData;
