import { createStore } from "vuex";

export default createStore({
  state: {
    userData: [
      {
        userid: "admin",
        password: "123",
        username: "전우정",
        addr: "서울",
        img: "test.jpg",
      },
      {
        userid: "user1",
        password: "123",
        username: "홍길동",
        addr: "서울",
        img: "test.jpg",
      },
      {
        userid: "user2",
        password: "123",
        username: "홍길동",
        addr: "서울",
        img: "test.jpg",
      },
    ],
  },
  mutations: {
    addUser(state, payload) {
      state.userData.push(payload);
    },
  },
});
