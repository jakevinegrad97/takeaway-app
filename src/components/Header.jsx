import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {

  render() {
    const {totalPrice} = this.props;
    return (
      <nav className="navbar navbar-light bg-light">
        <span style={{width: '100%'}} className="navbar-brand mb-0 h1">
          <h1>TakeAway</h1>
          <Link to='/'>Home</Link> | <Link to={{pathname: "/basket", state: {basket: this.props.basket}}}>Basket</Link> | <Link to='/fibonacci'>Fibonacci</Link>
          <span className="badge badge-pill badge-secondary m-2 float-right">
            £{totalPrice}
          </span>
          {' '}
          <button onClick={this.props.onReset} className='btn-md btn-danger m-2 float-right'>Reset Basket</button>
        </span>
      </nav>
    );
  }
};

export default Header;
