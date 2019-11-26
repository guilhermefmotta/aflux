import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../service/api';

import { ProductList } from './styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      amount: '',
      loading: false,
    };
  }

  async componentDidMount() {
    const { products } = this.state;
    const response = await api.get('/products');

    this.setState({
      products: [...products, response.data],
      amount: '',
      loading: true,
    });
  }

  render() {
    const { products, amount, loading } = this.state;

    if (loading) {
      return <h1>Loading</h1>;
    }

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.price}</span>
            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#fff" />{' '}
                {amount[product.id] || 0}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
