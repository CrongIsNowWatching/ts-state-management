export function createStore(reducer) {
  let state;

  const getState = () => ({ ...state });

  // store에 접근해 상태값 업데이트
  const dispatch = (action) => {
    state = reducer(state, action);
  };

  // 상태값 초기화
  state = reducer(state, {});

  return {
    getState,
    dispatch,
  };
}
