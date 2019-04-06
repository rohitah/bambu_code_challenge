export const getStockData = (payload, name) => {
  return {
    type: "GET_STOCK_DATA",
    payload,
    stockName: name
  };
};

export default getStockData;
