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
const store = createStore();

// init 액션 실행
store.dispatch({ type: 'init' });

console.log(store.getState());
