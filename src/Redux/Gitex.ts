import { createSlice } from '@reduxjs/toolkit';

interface MyState {
  value: boolean;
  count:number;
}

const initialState: MyState = {
  value: false,
  count:0
};

const mySlice = createSlice({
  name: 'menuOpenstatus',
  initialState,
  reducers: {
    adjustOpen: (state) => {
        if(state.value){
            state.value=false;
        }else{
            state.value=true;
        }
    },
    increaseCount:(state)=>{
        state.count=  state.count+1;
    }
  },
});

export const { adjustOpen ,increaseCount } = mySlice.actions;
export default mySlice.reducer;
