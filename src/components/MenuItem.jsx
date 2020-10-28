import React, { Component } from 'react';

class MenuItem extends Component {

  render() {
    const {menuItem} = this.props;
    return (
      <div>
        <hr />
        <h2 className='m-2'>{menuItem.name}</h2>
        <p className='m-2'>£{menuItem.price}</p>
        <button
          className=' m-2 btn-sm btn-danger'
          onClick={() => this.props.onDecrement(menuItem)}>
            -
        </button>
        <span className={this.getQuantityStyle()}>{menuItem.quantity}</span>
        <button
          className='m-2 btn-sm btn-success'
          onClick={() => this.props.onIncrement(menuItem)}>
            +
        </button>
        <button
          className="float-right btn btn-md btn-danger"
          onClick={() => this.props.onResetItem(menuItem)}>
            Delete
          </button>
      </div>
    );
  }

  getQuantityStyle() {
    let style = 'badge m-2 badge-';
    style += (this.props.menuItem.quantity === 0) ? 'warning' : 'primary';
    return style;
  }

}

export default MenuItem;
