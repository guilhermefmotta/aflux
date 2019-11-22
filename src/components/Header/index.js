import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My car</strong>
          <span>3 item</span>
        </div>
        <MdShoppingBasket size={35} color="#fff" />
      </Cart>
    </Container>
  );
}
