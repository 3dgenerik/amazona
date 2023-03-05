import { takeEvery, call, all, put } from "redux-saga/effects";
import {
  fetchProductsPedding,
  fetchProductsFulfilled,
  fetchProductsRejected,
} from "../features/products/products.slice";
import { IProduct } from "../interface/interface";
import axios from "axios";
import { ResponseGenerator } from "../interface/interface";

const fetchProducts = async (path: string) => {
  return await axios.get(path);
};

function* getProductsWorker(action: { type: string; payload: string }) {
  try {
    const response: ResponseGenerator = yield call(
      fetchProducts,
      action.payload
    );
    yield put(fetchProductsFulfilled(response.data as IProduct[]));
  } catch (err) {
    yield put(fetchProductsRejected("Something went wrong."));
  }
}

function* getProducts() {
  yield takeEvery(fetchProductsPedding.type, getProductsWorker);
}

export default function* rootSaga() {
  yield all([call(getProducts)]);
}
