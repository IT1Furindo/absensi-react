import { combineReducers, configureStore } from "@reduxjs/toolkit";
import permissionConfigSlice from "./permissionConfigSlice";
import themeConfigSlice from "./themeConfigSlice";

const rootReducer = combineReducers({
    themeConfig: themeConfigSlice,
    permissionConfig: permissionConfigSlice
});

export default configureStore({
    reducer: rootReducer
});

export type IRootState = ReturnType<typeof rootReducer>;
