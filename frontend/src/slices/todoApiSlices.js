import { data } from "react-router-dom";
import { apiSlice } from "./apiSlice";

const todoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: "/api/todo/getTodos",
      })
    }),
    createTodo: builder.mutation({
      query: (data) => ({
        url: "/api/todo",
        method: "post",
        body: data,
      })
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/api/todo/${id}`,
        method: "DELETE",
      })
    }),
    getTodoById: builder.query({
      query: (params) => ({
        url: "/api/todo/getTodoById",
        params,
      })
    }),
    updateTodo:builder.mutation({
      query:(data)=>({
        url: '/api/todo/updatetodo',
        method:'PATCH',
        body:data
      })
    })
  })
})

export const {
  useGetTodosQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useGetTodoByIdQuery,
  useUpdateTodoMutation
} = todoApiSlice;
