import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
        value: number;
}

const initialState: CounterState = {
        value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state : CounterState) => {
            state.value += 1
        },
        incrementAmount: (state: CounterState, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})

export const { increment, incrementAmount} = counterSlice.actions;
export const counterReducer =  counterSlice.reducer;