import { createStore } from './redux';

function reducer(state = {}, { type }) {
  switch (type) {
    case 'init':
      return {
        ...state,
        count: 0,
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

// init 액션 실행
store.dispatch({ type: 'init' });
