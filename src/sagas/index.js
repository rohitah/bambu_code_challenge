import { put, takeLatest, all } from "redux-saga/effects";
const key = "33KB5PNRDP7JVW8W";
function* fetchStockData(action) {
  const result = yield fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${
      action.payload
    }&apikey=${key}`
  ).then(response => response.json());
  yield put({
    type: "STOCK_DATA_RECEIVED",
    chartData: result["Time Series (Daily)"],
    stockName: action.stockName,
    note: result.Note
  });
}

function* actionWatcher() {
  yield takeLatest("GET_STOCK_DATA", fetchStockData);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}

// API key: 33KB5PNRDP7JVW8W.
