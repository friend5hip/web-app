import React from "react";

function NavBarComp() {
  return (
    <div>
      <nav className="container mx-auto flex justify-between p-3 md:px-0">
        <div className="flex items-enter">
          <img src="./images/icon.svg"></img>
        </div>
        <div className="hidden md:flex">
          <ul className="flex">
            <li>
              <a
                href="#"
                className="px-4 py-2 block hover:bg-black hover:text-white rounded"
              >
                New
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-2 block hover:bg-black hover:text-white rounded"
              >
                Men
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-2 block hover:bg-black hover:text-white rounded"
              >
                Woman
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-2 block hover:bg-black hover:text-white rounded"
              >
                Kids
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-2 block hover:bg-black hover:text-white rounded"
              >
                Sale
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBarComp;
