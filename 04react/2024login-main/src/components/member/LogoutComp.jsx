import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/loginSlice";

function LogoutComp() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div className="flex justify-center items-center">
      <button onClick={handleClick}>로그아웃하시겠습니까?</button>
    </div>
  );
}

export default LogoutComp;
