import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  mode: "light",
  posts: [],
};

// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setMode: (state) => {
//       state.mode = state.mode === "light" ? "dark" : "light";
//     },

//     setLogin: (state, action) => {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//     },
//     setLogout: (state) => {
//       state.user = null;
//       state.token = null;
//     },
//     setFriends: (state, action) => {
//       if (state.user) {
//         state.user.friends = action.payload.friends;
//       } else {
//         console.log("User not found");
//       }
//     },
//     setPosts: (state, action) => {
//       state.posts = action.payload.posts;
//     },
//     setPost: (state, action) => {
//       const updatedPosts = state.posts.map((post) => {
//         if (post._id === action.payload.post._id) {
//           return action.payload.post;
//         }
//         return post;
//       });
//       state.posts = updatedPosts;
//     },
//   },
// });

// export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
//   authSlice.actions;
// export default authSlice.reducer;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends ?? []; // Default to empty array if undefined
      } else {
        throw new Error("User not found when setting friends");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts ?? []; // Default to empty array if undefined
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) =>
        post._id === action.payload.post._id ? action.payload.post : post
      );
      state.posts = updatedPosts;
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;
