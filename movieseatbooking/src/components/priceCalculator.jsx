import React, { Component } from 'react';

class PriceCalculator extends Component {
    state = {  }
    render() { 
        let count = this.props.totalSeats.length;
        let price = this.props.moviePrice;
        return (            
          <div>
          You have selected {count} seats and the total price is {price * count}$
          </div>
        );
    }
}
 
export default PriceCalculator;