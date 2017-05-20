
import { channel } from 'redux-saga';
import { take, put, call } from 'redux-saga/effects';

export const locationChannel = channel()

import {REDUX_SAGA_LOCATION_ACTION_SET_POSITION
    , REDUX_SAGA_LOCATION_ACTION_SET_ERROR} from '../actions';

export function * watchLocationChannel() {
  while (true) {
    const action = yield take(locationChannel)
    yield put(action)
  }
}

export function * getCurrentPosition(options) {
    navigator.geolocation.getCurrentPosition(
      position => {
        locationChannel.put({type: REDUX_SAGA_LOCATION_ACTION_SET_POSITION, position})
      },
      (error) => locationChannel.put({type: REDUX_SAGA_LOCATION_ACTION_SET_ERROR, error}),
      options
    );
    
}

