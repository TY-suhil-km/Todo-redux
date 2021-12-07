import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";

// const counterReducer = (state = { count: 0 }, action) => {
//   if (action.type === "inc") {
//     return {
//       count: state.count + 1,
//     };
//   }
//   if (action.type === "dec") {
//     return {
//       count: state.count - 1,
//     };
//   }
//   return state;
// };
const initialState = [];

// const todoReducer = (todoList = initialState, action) => {
//   if (action.type === "append") {
//     return [
//       ...todoList,
//       {
//         name: action.name,
//         id: todoList.length,
//         status: "pending",
//       },
//     ];
//   }
//   if (action.type === "delete") {
//     const temp = todoList.filter((item) => item.id !== action.id);

//     return temp;
//   }

//   if (action.type === "done") {
//     const temp = todoList.map((item) => {
//       if (item.id === action.id) {
//         item.status = "done";
//       }
//       return item;
//     });

//     return temp;
//   }
//   return todoList;
// };

const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    appends(todoList, action) {
      todoList.push({
        name: action.payload,
        id: todoList.length,
        status: "pending",
      });
    },
    deleteitem(todoList, action) {
      const temp = todoList.filter((item) => item.id !== action.payload);
      return temp;
    },
    done(todoList, action) {
      todoList = todoList.map((item) => {
        if (item.id === action.payload) {
          item.status = "done";
        }
        return item;
      });
    },
  },
});

const store = configureStore(todoSlice);
export const TodoActions = todoSlice.actions;
export default store;
