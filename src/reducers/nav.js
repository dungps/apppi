import AppNavigator from '@src/AppNavigator';

const initialState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('splash')
);

const nav = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default nav;
