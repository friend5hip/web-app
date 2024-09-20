import React from "react";
import Layout from "../../layout/Layout";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function IndexPage() {
  const navigate = useNavigate();
  const clickList = () => {
    navigate({ pathname: "list" });
  };
  const clickAdd = () => {
    navigate({ pathname: "add" });
  };
  const clickRead = () => {
    navigate({ pathname: "list/1" });
  };

  return (
    <Layout>
      <nav className="flex justify-end">
        <ul className="flex gap-4">
          <li
            onClick={() => {
              clickList();
            }}
          >
            list
          </li>
          <li
            onClick={() => {
              clickAdd();
            }}
          >
            add
          </li>
          <li
            onClick={() => {
              clickRead();
            }}
          >
            read
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </Layout>
  );
}

export default IndexPage;
