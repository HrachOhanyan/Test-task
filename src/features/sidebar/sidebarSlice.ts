import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { loadCategories } from './sidebarAPI';
import {Category} from "../../common/Types";

export interface SidebarState {
    categories: Array<Category>;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: SidebarState = {
    categories: [],
    status: 'idle',
};

export const incrementAsync = createAsyncThunk(
    'sidebar/categories',
    async () => {
        const response = await loadCategories();
        const data = response && response.data;
        return data ? data : [];
    }
);

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.categories = action.payload;
            });
    },
});

export const sidebarCategories = (state: RootState) => state.sidebar.categories;

export default sidebarSlice.reducer;
