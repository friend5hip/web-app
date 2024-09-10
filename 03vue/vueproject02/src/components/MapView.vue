<template>
  <div class="mapModal d-flex p-3">
    <div
      id="map"
      style="width: 60%; height: 70%"
      class="d-block justify-content-center align-items-center"
    ></div>
    <div class="d-flex justify-content-center mt-3 gap-2">
      <div class="btn btn-danger" @click="$store.commit('closeMapModal')">
        닫기
      </div>
      <div
        class="btn btn-dark"
        @click="
          $store.commit('updateLocation', { lat: latitude, lon: longitude }),
            $store.commit('closeMapModal')
        "
      >
        현재 좌표:
        {{ latitude }}
        {{ longitude }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { ref } from "vue";

const latitude = ref(0);
const longitude = ref(0);

onMounted(() => {
  if (!("geolocation" in navigator)) {
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      console.log(pos.coords.latitude, pos.coords.longitude);

      latitude.value = pos.coords.latitude;
      longitude.value = pos.coords.longitude;

      initMap();
    },
    (err) => {
      alert(err.message);
    }
  );

  const initMap = () => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(latitude.value, longitude.value), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(latitude.value, longitude.value);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 지도가 이동, 확대, 축소로 인해 중심좌표가 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // 지도의 중심좌표를 얻어옵니다
      var latlng = mouseEvent.latLng;

      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);

      latitude.value = latlng.getLat();
      longitude.value = latlng.getLng();
    });
  };
});
</script>

<style lang="scss" scoped>
.mapModal {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3); // (r, g, b, opacity)
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  #map {
    position: relative;
    border-radius: 5px;
    @media screen and (max-width: 570px) {
      width: 90%;
    }
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      z-index: 999;
      border-radius: 50%;
      border: 2px solid white;
      transform: translate(-50%, -50%); // 정확히 중앙에 위치하도록 조정
      background-color: red;
    }
  }
}
</style>
