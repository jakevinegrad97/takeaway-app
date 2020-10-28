import React, { Component } from 'react';
import MenuItem from './MenuItem';

class Menu extends Component {

  render() {
    const {menuItems} = this.props;
    return (
      <div>
        {menuItems.map(menuItem => (
          <MenuItem
            key={menuItem.id}
            menuItem={menuItem}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onResetItem={this.props.onResetItem}/>
        ))}
      </div>
    );
  }

}

export default Menu;
