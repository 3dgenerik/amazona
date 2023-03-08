import { takeEvery, call, all, put } from "redux-saga/effects";
import {
  fetchProductsPedding,
  fetchProductsFulfilled,
  fetchProductsRejected,
} from "../features/products/products.slice";
import { IProduct } from "../interface/interface";
import axios, { AxiosError } from "axios";
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
  } catch (err: any | unknown) {
    let error = ''
    if (err instanceof AxiosError)
      error = err.message
    else
      error = 'Something went wrong'
    yield put(fetchProductsRejected(error));
  }
}

function* getProducts() {
  yield takeEvery(fetchProductsPedding.type, getProductsWorker);
}

export default function* rootSaga() {
  yield all([call(getProducts)]);
}
