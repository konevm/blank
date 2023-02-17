import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    //paste your reduser here
  },
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export { store };
export type { AppDispatch, RootState, AppThunk };
