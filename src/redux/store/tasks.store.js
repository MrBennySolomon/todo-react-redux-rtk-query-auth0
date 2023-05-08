import { configureStore } from '@reduxjs/toolkit';
import { emojiAPI } from '../features/emoji.slice';
import taskReducer from '../features/task.slice';

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        [emojiAPI.reducerPath]: emojiAPI.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(emojiAPI.middleware);
    }
});
export default store;