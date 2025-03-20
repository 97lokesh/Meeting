import { createSlice } from '@reduxjs/toolkit'
export const listSlice = createSlice({
   name:'list',
   initialState:{
    items:[],
    total:0
   },
   reducers:{
    addToImportant:(state, action)=>{
        const existingItems = state.items.find(item => item.id == action.payload.id)
        if(!existingItems){
        state.items.push(action.payload)
        }
    },
    removeFromImportant:(state, action)=>{
        state.items = state.items.filter(item=> item.id !== action.payload)
    }
   }
})

export const {addToImportant , removeFromImportant} = listSlice.actions
export default  listSlice.reducer