import React, { Component } from 'react';

class Basket extends Component {

  handleEmptyBasket = () => {
    var basket = this.props.location.state.basket;
    let total = 0;
    for(var i = 0; i < basket.length; i++){
      total += basket[i].quantity;
    }
    if(total === 0){
      return (
        <p>You currently have no items in the basket.</p>
      )
    }
  }

  render() {
    var basket = this.props.location.state.basket;
    return (
      <div>
        {this.handleEmptyBasket()}
        {basket.map(menuItem => (
          <ul style={{listStyleType: 'none'}}>
            <li>{menuItem.quantity !== 0 ? menuItem.name : ''}
              <span className='badge badge-pill badge-primary m-2'>
                {menuItem.quantity !== 0 ? menuItem.quantity : ''}
                </span>
            </li>
          </ul>
        ))}
      </div>
    );
  }

}

export default Basket;
