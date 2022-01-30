import { createSlice } from '@reduxjs/toolkit'
import randomInteger from 'random-int'

const initialState = {
  tableChartData: [
    {
      id: '1',
      name: 'Row1',
      value: 22000,
      PrevValue: 10000,
    },
    {
      id: '2',
      name: 'Row 2',
      value: 20567,
      PrevValue: 30555,
    },
    {
      id: '3',
      name: 'row 3',
      value: 20567,
      PrevValue: 10555,
    },
    {
      id: '3',
      name: 'row 3',
      value: 20567,
      PrevValue: 10555,
    },
    {
      id: '3',
      name: 'row 3',
      value: 20567,
      PrevValue: 10555,
    },
    {
      id: '3',
      name: 'row 3',
      value: 20567,
      PrevValue: 10555,
    },
    {
      id: '3',
      name: 'row 3',
      value: 22000,
      PrevValue: 10000,
    },
    {
      id: '3',
      name: 'row 3',
      value: 22000,
      PrevValue: 10000,
    },
    {
      id: '3',
      name: 'row 3',
      value: 22000,
      PrevValue: 10000,
    },
    {
      id: '3',
      name: 'row 3',
      value: 20567,
      PrevValue: 10555,
    },
    {
      id: '3',
      name: 'row 3',
      value: 20567,
      PrevValue: 10555,
    },
    {
      id: '3',
      name: 'row 3',
      value: 20567,
      PrevValue: 10555,
    },
    {
      id: '3',
      name: 'row 3',
      value: 20567,
      PrevValue: 10555,
    },
    {
      id: '3',
      name: 'row 3',
      value: 20567,
      PrevValue: 10555,
    },
  ],
  randomSeriesA: [
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
  ],
  randomSeriesB: [
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
  ],
  randomSeriesC: [
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
    { data: randomInteger(0, 100) },
  ],
}

export const myReducerSlice = createSlice({
  name: 'red',
  initialState,
  reducers: {},
})

// export const {} = myReducerSlice.actions

export default myReducerSlice.reducer
