import './App.css';
import React, { Component } from 'react';
import PriceCalculator from "./components/priceCalculator"
import SeatsMatrix from "./components/seatsMatrix"

class App extends Component {
  constructor() {
    super();
     this.state = {    
      totalSeats : 0,
      moviePrice : 10,
      arrseatNumbers : [],
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
         <h1>Book Tickets</h1>
            <select className="movies-list" onChange={this.handlerDropDown}>
              {Object.entries(movies).map(([key,value],i) => 
              <option key={i} value={value}>{key} ({value}{`$`})</option>)}
            </select>
          <SeatsMatrix arrseatNumbers={this.state.arrseatNumbers} />
          {/* <PriceCalculator arrseatNumbers={this.state.arrseatNumbers} price={this.state.moviePrice}/> */}
          <PriceCalculator arrseatNumbers={this.state.arrseatNumbers} price={this.state.moviePrice}/>
      </div>
    );
  }
}
 
export default App;