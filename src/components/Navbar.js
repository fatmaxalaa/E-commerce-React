import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        return (
          <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
            <Link to="/">
              <img src={logo} alt="store" className="navbar-brand" />
            </Link>
            <ul className="navbar-nav align-items-center">
              <div className="row">
                <div className="col-4">
                  <li className="nav-item ml-5   logo">
                  Eco-Market
                  </li>
                </div>
                <div className="col-4">
                  <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                </div>
                <div className="col-4">
                  <li className="nav-item ml-5">
                    <Link to="/productList" className="nav-link">
                      Products
                    </Link>
                  </li>
                </div>
              </div>
            </ul>
            <Link to="/cart" className="ml-auto">
              <ButtonContainer>
                <i className="fas fa-cart-plus">my cart</i>
              </ButtonContainer>
            </Link>
          </NavWrapper>
        );
    }
}
const NavWrapper = styled.nav`
background:var(--mainRed);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3 rem;
    text-transform:capitalize;
}
`;
