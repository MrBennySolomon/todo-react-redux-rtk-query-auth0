import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        createTask(state, action) {
            state.push(action.payload);
        },
        updateTask(state, action) {
            const name = action.payload.name;
            const taskIndx = state.findIndex(el => el.name === name);
            const oldTask = state[taskIndx];
            const newTask = { ...oldTask, ...action.payload };
            state.splice(taskIndx, 1, newTask);
        },
        // deleteTask(state, action) { },
        // readTask(state, action) { },
        completeTask(state, action) {
            const name = action.payload.name;
            const taskIndx = state.findIndex(el => el.name === name);
            const newTask = state[taskIndx];
            newTask.isComplete = !newTask.isComplete;
            state[taskIndx] = newTask;
        }
    },
});
export const { createTask, completeTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;