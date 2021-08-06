import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { IconContext } from "react-icons";

function Sidebar() {
  const [sidebar] = useState(false);

  return (
    <>
      <div className="sidebar">
        <IconContext.Provider value={{ color: "white" }}>
          <nav className={sidebar ? "side-menu active" : "side-menu"}>
            <ul className="side-menu-items">
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>{" "}
      </div>
    </>
  );
}

export default Sidebar;
