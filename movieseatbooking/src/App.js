import './App.css';
import React, { Component } from 'react';
import PriceCalculator from "./components/priceCalculator"
import SeatsMatrix from "./components/seatsMatrix"
import Seat from "./components/seat.jsx"

class App extends Component {
  constructor() {
    super();
     this.state = {    
      totalSeats : 0,
      moviePrice : 10,
      arrseatNumbers : [16,23,4],
      movieList : {
        "Joker": 10,
        "The girl on the Train": 8,
        "The Lion King": 11,
        "Avengers": 12
      } 
    }     
    this.handlerDropDown = this.handlerDropDown.bind(this);
  }
  
  handlerDropDown(e) {
    this.setState({ moviePrice: e.target.value });
  }

  render() {
    const movies = this.state.movieList;
    // let price=0;
    return ( 
      <div className="App">
         <h1>Book Tickets{this.state.totalSeats}</h1>
            <select className="movies-list" onChange={this.handlerDropDown}>
              {Object.entries(movies).map(([key,value],i) => 
              <option key={i} value={value}>{key} ({value}{`$`})</option>)}
           </select>
           {/* <div>Selected value is : {this.state.moviePrice}</div> */}
           <div className="row">
            Unoccupied : <Seat seatColor="seat-grey" /> Occupied : <Seat seatColor="seat-black" />            
          </div>                        
          <div className="screen"></div>
          <SeatsMatrix />
          <PriceCalculator/>
          <div>
          You have selected {this.props.numofSeats} seats and the total price is {this.state.moviePrice}
          </div>

      </div>
    );
  }
}
 
export default App;