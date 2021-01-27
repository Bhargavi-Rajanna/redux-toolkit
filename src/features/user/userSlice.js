import { createSlice } from '@reduxjs/toolkit';

export const userSlice =createSlice({

    name:'user', 
    initialState:{
        value: []
    },

    reducers:{
        addUser: (state , action) =>{

         state.value = [...state.value , action.payload];
        },
        removeUser: (state , action) =>{
            state.value = state.value.filter(item => item !== action.payload);
        }
    }
});

export const selectUser = state => state.user.value;

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;