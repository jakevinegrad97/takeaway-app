import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Basket from './pages/Basket';
import Fibonacci from './pages/Fibonacci';

class App extends Component {

  state = {
    menuItems: [
      {
        id: 1,
        name: 'Pizza',
        quantity: 0,
        price: 4.99.toFixed(2)
      },
      {
        id: 2,
        name: 'Chips',
        quantity: 0,
        price: 2.99.toFixed(2)
      },
      {
        id: 3,
        name: 'Kebab',
        quantity: 0,
        price: 3.50.toFixed(2)
      },
      {
        id: 4,
        name: 'Coke',
        quantity: 0,
        price: 1.75.toFixed(2)
      }
    ]
  }

  handleIncrement = menuItem => {
    const menuItems = [...this.state.menuItems];
    const index = menuItems.indexOf(menuItem);
    menuItems[index] = {...menuItem};
    menuItems[index].quantity++;
    this.setState({menuItems});
  };

  handleDecrement = menuItem => {
    const menuItems = [...this.state.menuItems];
    const index = menuItems.indexOf(menuItem);
    menuItems[index] = {...menuItem};
    if(menuItems[index].quantity > 0){
      menuItems[index].quantity--;
    }
    this.setState({menuItems});
  };

  handleTotal = () => {
    const menuItems = [...this.state.menuItems];
    let total = 0;
    for(var i = 0; i < menuItems.length; i++){
      total += menuItems[i].quantity * menuItems[i].price;
    }
    return total.toFixed(2);
  };

  handleReset = () => {
    const menuItems = this.state.menuItems.map(menuItem => {
      menuItem.quantity = 0;
      return menuItem;
    });
    this.setState({menuItems});
  }

  handleResetItem = menuItem => {
    const menuItems = [...this.state.menuItems];
    const index = menuItems.indexOf(menuItem);
    menuItems[index] = {...menuItem};
    menuItems[index].quantity = 0;
    this.setState({menuItems});
  }

  render() {
    return (
      <Router>
        <div>
          <Header
            totalPrice={this.handleTotal()}
            onReset={this.handleReset}
            basket={this.state.menuItems} />
          <Route exact path="/" render={props =>(
            <React.Fragment>
            <Menu
              menuItems={this.state.menuItems}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onResetItem={this.handleResetItem}/>
            </React.Fragment>
          )} />
          <Route path="/basket" component={Basket}/>
          <Route path="/fibonacci" component={Fibonacci} />
        </div>
      </Router>
    );
  }
}

export default App;
