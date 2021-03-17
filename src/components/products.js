import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Routes from "../routers";

class Products extends Component {
  render() {
    const products = [
      {
        id: 1,
        slug: "iphone",
        name: "iphone 6s",
        price: 16000,
      },
      {
        id: 2,
        slug: "samsung",
        name: "samsung s7",
        price: 18000,
      },
      {
        id: 3,
        slug: "oppo",
        name: "oppo f1s",
        price: 22000,
      },
      {
        id: 4,
        slug: "iphone",
        name: "iphone xr",
        price: 16000,
      },
      {
        id: 5,
        slug: "sony",
        name: "sony xs max",
        price: 16500,
      },
    ];

    var { match, location } = this.props;
    var results = products.map((product, index) => {
      return (
        <NavLink
          to={`${match.url}/${product.slug}/${product.name}`}
          key={index}
        >
          <li className="list-group-item">
            {product.name} - {product.price}
          </li>
        </NavLink>
      );
    });

    console.log(location);

    return (
      <div>
        <h1>Danh sach san pham</h1>
        <div className="row">
          <ul className="list-group">{results}</ul>
        </div>
        <div className="row">
          <Route
            path={Routes.path}
            exact={Routes.exact}
            component={Routes.main}
          />
        </div>
      </div>
    );
  }
}

export default Products;
