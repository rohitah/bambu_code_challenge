import { put, takeLatest, all } from "redux-saga/effects";
import { apiURL, apiKey } from "../config/index";

function* fetchStockData(action) {
  const result = yield fetch(
    `${apiURL}/query?function=TIME_SERIES_DAILY&symbol=${
      action.payload
    }&apikey=${apiKey}`
  ).then(response => response.json());
  yield put({
    type: "STOCK_DATA_RECEIVED",
    chartData: result["Time Series (Daily)"],
    stockCode: action.payload,
    note: result.Note
  });
}

function* actionWatcher() {
  yield takeLatest("GET_STOCK_DATA", fetchStockData);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
