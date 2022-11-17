import React, { Component } from "react";
import { Link } from "react-router-dom";
import all from "../img/all.png";

export default class Home extends Component {
  render() {
    return (
      <div className=" mt-3">
        <div className="container">
          <div className=" row ">
            <div className="col-6 mt-5">
              <h2>
                <p className="mt-5">
                  The Center of Women <br />
                </p>
                <p className="mt-3">
                  Trending Clothes in <br />
                </p>
                <p className="mt-3">
                  The World. <br />
                </p>
              </h2>
              <p className="text-purple mt-4">
                update, latest and compatitive prices
              </p>

              <Link
                type="button"
                className="btn btn-outline-secondary mt-4"
                to="/productList"
              >
                Shop Now
              </Link>
            </div>
            <div className="col-6">
              <img src="../img/shop.png" />
            </div>
          </div>
          <h1 className="mt-5  text-center">Category</h1>
          <div className="row mt-5">
            <div className="col-2">
              <div className="catDiv">
                <img src="../../build/img/all.png" className="catImg" />
              </div>
              <p className="mt-2 all">All</p>
            </div>
            <div className="col-2">
              <div className="catDiv">
                <img src="../img/bag.png" className="catImg" />
              </div>

              <p className="mt-2 all">Bags</p>
            </div>
            <div className="col-2">
              <div className="catDiv">
                <img src="../img/dress.png" className="catImg" />
              </div>

              <p className="mt-2 all">Dress</p>
            </div>
            <div className="col-2">
              <div className="catDiv">
                <img src="../img/jacket.png" className="catImg" />
              </div>

              <p className="mt-2 all">Jackets</p>
            </div>
            <div className="col-2">
              <div className="catDiv">
                <img src="../img/shorts.png" className="catImg" />
              </div>

              <p className="mt-2 all">Shorts</p>
            </div>
            <div className="col-2">
              <div className="catDiv">
                <img src="../img/skirt.png" className="catImg" />
              </div>

              <p className="mt-2 all">Skirt</p>
            </div>
          </div>
          <h1 className="mt-5 text-center">Sale</h1>
          <div className="row mt-5 justify-content-center">
            <div className="col-4 mt-3 saldCard">
              <div className="saleMar">
                <div className="row">
                  <div className="col-6">
                    <p className="text-secondary">Sale off</p>
                    <h5 className="text-dark">Great Summer Collection</h5>
                    <button className="mt-4 btn btn-outline-dark">
                      Shop Now{" "}
                    </button>
                  </div>
                  <div className="col-6">
                    <img
                      src="../img/catag5-removebg-preview.png"
                      className="sale-bg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 mt-3 saldCard">
              <div className="saleMar">
                <div className="row">
                  <div className="col-6">
                    <p className="text-secondary">Sale off</p>
                    <h5 className="text-dark">Save 20% On Woman Bag</h5>
                    <button className="mt-4 btn btn-outline-dark">
                      Shop Now{" "}
                    </button>
                  </div>
                  <div className="col-6">
                    <img
                      src="../img/catag3-removebg-preview.png"
                      className="sale-bg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4 mt-3 saldCard">
              <div className="saleMar">
                <div className="row">
                  <div className="col-6">
                    <p className="text-secondary">Sale off</p>
                    <h5 className="text-dark">Save 20% On Woman Bag</h5>
                    <button className="mt-4 btn btn-outline-dark">
                      Shop Now{" "}
                    </button>
                  </div>
                  <div className="col-6">
                    <img
                      src="../img/catag6-removebg-preview.png"
                      className="sale-bg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4 mt-3 saldCard">
              <div className="saleMar">
                <div className="row">
                  <div className="col-6">
                    <p className="text-secondary">Sale off</p>
                    <h5 className="text-dark">Save 20% On Woman Bag</h5>
                    <button className="mt-4 btn btn-outline-dark">
                      Shop Now{" "}
                    </button>
                  </div>
                  <div className="col-6">
                    <img
                      src="../img/catag6-removebg-preview.png"
                      className="sale-bg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact mt-5 container-fluid">
          <div className="row justify-content-center">
            <div className="col-4">
              <p>Sign Up To Newsletter</p>
            </div>
            <div className="col-4">
              <p>...And Receive $25 Coupon For First Shopping.</p>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name...."
                  />
                </div>
                <div className="col-6">
                  <span className="btn btn-dark">Subscribe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="foter mt-5">
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-4">
                <p>Contact:</p>
                <p>
                  <b className="me-3">Address: </b>562 Wellington,San Francisco
                </p>
                <p>
                  <b className="me-3">Phone: </b> +01 2222 365 /(+91) 01 2345
                  6789
                </p>
                <p>
                  <b className="me-3">Hours: </b>10:00 - 18:00, Mon - Sat
                </p>
                <p>Follow us:</p>
              </div>
              <div className="col-4">
                <h5>About:</h5>
                <p>About Us</p>
                <p>Delivery Information</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Contact Us</p>
                <p>Support Center</p>
              </div>
              <div className="col-4">
                <h5>My Account:</h5>
                <p>Sign In</p>
                <p>View Cart</p>
                <p>My Wishlist</p>
                <p>Track My Order</p>
                <p>Help</p>
                <p>Order</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
