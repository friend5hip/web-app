import { createStore } from "vuex";

export default createStore({
  state: {
    userData: [
      {
        userid: "admin",
        password: "123",
        username: "Kim",
        addr: "서울",
        img: "https://picsum.photos/seed/1/100",
      },
      {
        userid: "Apple",
        password: "456",
        username: "Lee",
        addr: "서울",
        img: "https://picsum.photos/seed/2/100",
      },
      {
        userid: "Banana",
        password: "789",
        username: "Park",
        addr: "서울",
        img: "https://picsum.photos/seed/3/100",
      },
    ],
    selectedUser: null,
    coords: {
      moveLat: "0",
      moveLon: "0",
    },
    isMapModal: false,
    isDetailModal: false,
  },
  mutations: {
    addUser(state, payload) {
      state.userData.push(payload);
      console.log("User added: " + state.userData.userid);
    },
    updateUser(state, payload) {
      const userIndex = state.userData.findIndex(
        (user) => user.userid === payload.userid
      );

      if (userIndex !== -1) {
        state.userData[userIndex].username = payload.username;
        state.userData[userIndex].password = payload.password;
        state.userData[userIndex].addr = payload.addr;
        state.userData[userIndex].img = payload.img;
        console.log("Updated User ID " + payload.userid);
      } else {
        alert("사용자가 없습니다.");
        console.log("Update: User not found");
      }
    },
    deleteUser(state, payload) {
      const userIndex = state.userData.findIndex(
        (user) => user.userid === payload
      );

      // 유저가 존재하면 splice로 해당 유저를 배열에서 삭제
      state.userData.splice(userIndex, 1);
      console.log("Deleted User ID " + payload);
    },
    selectUser(state, user) {
      state.selectedUser = user; // 선택된 유저를 저장
    },
    openMapModal(state) {
      state.isMapModal = true;
    },
    openDetailModal(state) {
      state.isDetailModal = true;
    },
    closeDetailModal(state) {
      state.isDetailModal = false;
    },
    closeMapModal(state) {
      state.isMapModal = false;
    },
    updateLocation(state, payload) {
      state.coords.moveLat = payload.lat;
      state.coords.moveLon = payload.lon;
      console.log(
        "Selected Location: " +
          state.coords.moveLat +
          " " +
          state.coords.moveLon
      );
    },
  },
});
