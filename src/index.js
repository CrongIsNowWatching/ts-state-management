import { createStore, createAction } from './redux';

// 액션 정의
const ACTION_INIT = 'INIT';
const ACTION_INCR = 'INCREAMENT';
const ACTION_DECR = 'DECREAMENT';

// 리듀서 정의
function reducer(state = {}, { type, payload }) {
  switch (type) {
    case ACTION_INIT:
      return {
        ...state,
        count: payload.count || 0,
      };
    case ACTION_INCR:
      return {
        ...state,
        count: state.count ? state.count + 1 : 0,
      };
    case ACTION_DECR:
      return {
        ...state,
        count: state.count ? state.count - 1 : 0,
      };
    default:
      return { ...state };
  }
}

// store 생성
const store = createStore(reducer);

// 구독자 등록
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch 실행
store.dispatch(createAction(ACTION_INIT, { count: 100 }));
store.dispatch(createAction(ACTION_DECR)); // 99
store.dispatch(createAction(ACTION_DECR)); // 98
store.dispatch(createAction(ACTION_INCR)); // 99
store.dispatch(createAction(ACTION_DECR)); // 98
store.dispatch(createAction(ACTION_INIT)); // 0
