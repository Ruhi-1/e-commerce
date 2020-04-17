import React, { Component } from "react";
export default class CartItem extends Component {
    render() {
        const { id, title, img, price, total, count } = this.props.item;
        const { increment, decrement, removeItem} = this.props.value;

        return (
            <div>
                <div className="col-10 mx-auto col-lg-2">
                    <img
                        src={img}
                        style={{ width: "5rem", heigth: "5rem" }}
                        className="img-fluid"
                        alt=""
                    />
                </div>
                <div className="col-10 mx-auto col-lg-2 ">
                    <span className="d-lg-none">product :</span> {title}
                </div>
            </div>
        )
    }
}