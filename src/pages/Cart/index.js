import React, { Component } from 'react';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import api from '../../service/api';

import { Container, ProductTable, Total } from './styles';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      total: '',
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const response = await api.get(`/products`);
    this.setState({});
  }

  render() {
    const { cart, total } = this.state;

    return (
      <Container>
        <ProductTable>
          <tread>
            <tr>
              <th />
              <th>Produto</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </tread>
          <tbody>
            {cart.map(product => (
              <tr>
                <td>
                  <img src={product.image} alt={product.title} />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>
                </td>
                <td>
                  <div>
                    <button type="button">
                      <MdRemoveCircleOutline size={20} color="#7159c1" />
                    </button>
                    <input type="number" readOnly />
                    <button type="button">
                      <MdAddCircleOutline size={20} color="#7159c1" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{product.subtotal}</strong>
                </td>
                <td>
                  <button type="button">
                    <MdDelete size={20} color="#7159c1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>
        <footer>
          <button type="button">Finalizar pedido</button>

          <Total>
            <span>TOTAL</span>
            <strong>{total}</strong>
          </Total>
        </footer>
      </Container>
    );
  }
}
