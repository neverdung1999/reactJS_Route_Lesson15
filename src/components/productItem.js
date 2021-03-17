import React, { Component } from "react";

class productItem extends Component {
  render() {
    var { match } = this.props;
    var slug = match.params.slug;

    console.log(match);
    return (
      <div>
        <h1>Day la trang Product Item: {slug}</h1>
      </div>
    );
  }
}

export default productItem;
