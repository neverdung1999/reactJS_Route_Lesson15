import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const nameMenu = [
  {
    name: "Trang chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Giới thiệu",
    to: "/about",
    exact: false,
  },
  {
    name: "Liên hệ",
    to: "/contact",
    exact: false,
  },
  {
    name: "Sản phẩm",
    to: "/products",
    exact: false,
  },
  {
    name: "Đăng nhập",
    to: "/login",
    exact: false,
  },
  {
    name: "Not found",
    to: "/aasdasd",
    exact: false,
  },
];

class menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <NavLink to="/" activeClassName="navbar-brand">
              WebSiteName
            </NavLink>
          </div>
          <ul className="nav navbar-nav">{this.showMenus(nameMenu)}</ul>
        </div>
      </nav>
    );
  }

  showMenus = (menus) => {
    var results = null;

    if (menus.length > 0) {
      results = menus.map((menu, index) => {
        return (
          <li key={index}>
            <Link to={menu.to}>{menu.name}</Link>
          </li>
        );
      });
    }

    return results;
  };
}

export default menu;
