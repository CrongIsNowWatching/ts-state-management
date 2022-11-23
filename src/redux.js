export function createStore(reducer) {
  let state;

  // 구독자 정보 저장
  const listeners = [];

  // 상태 값 업데이트시 값을 전달 받을 subscriber를 등록
  const subscribe = (subscriber, context = null) => {
    listeners.push({
      subscriber,
      context,
    });
  };

  // 상태 값 업데이트시 출판
  const publish = () => {
    listeners.forEach(({ subscriber, context }) => subscriber.call(context));
  };

  // 조회
  const getState = () => ({ ...state });

  // store에 접근해 상태값 업데이트
  const dispatch = (action) => {
    state = reducer(state, action);
    // 값 업데이트마다 구독자들에게 상태값 출판
    publish();
  };

  // 상태값 초기화
  state = reducer(state, {});

  return {
    getState,
    dispatch,
    subscribe,
  };
}
