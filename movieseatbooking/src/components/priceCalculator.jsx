import React, { Component } from 'react';

class PriceCalculator extends Component {
    state = {  }
    render() { 
        let count = this.props.arrseatNumbers.length;
        let price = this.props.moviePrice;
        return (            
          <div>
          You have selected {count} seats and the total price is {price}
          </div>
        );
    }
}
 
export default PriceCalculator;