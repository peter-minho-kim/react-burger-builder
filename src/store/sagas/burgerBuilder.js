import { put } from 'redux-saga/effects';

import axios from '../../axios-orders';
import * as actions from '../actions';

export function* initIngredientsSaga(action) {
  try {
    const response = yield axios.get(
      'https://react-burger-builder-576c9.firebaseio.com/ingredients.json'
    );
    yield put(actions.setIngredients(response.data));
  } catch (error) {
    yield put(actions.fetchIngredientsFailed());
  }
}