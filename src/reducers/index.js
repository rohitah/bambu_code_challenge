const reducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_STOCK_DATA":
      return { ...state, loading: true };
    case "STOCK_DATA_RECEIVED":
      return {
        ...state,
        stockData: action.chartData,
        stockCode: action.stockCode,
        note: action.note,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
