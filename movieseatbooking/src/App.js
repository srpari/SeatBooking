import './App.css';
import React, { Component } from 'react';
import PriceCalculator from "./components/priceCalculator"
import SeatsMatrix from "./components/seatsMatrix"
import Seat from "./components/seat.jsx"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {    
      totalSeats : 0,
      moviePrice : 0,
      movieList : {
        "Joker": 10,
        "The girl on the Train": 8,
        "The Lion King": 11,
        "Avengers": 12
      }       
     }
    
  }
  render() {
    const movies = this.state.movieList;
    return ( 
      <div className="App">
         <h1>Book Tickets</h1>
          {/* {Object.entries(movies).map(([key,value],i) =>
           <option key={i} value={key}>{key} {value}</option>)  
           } */}
           <select className="movies-list">
              {Object.entries(movies).map(([key,value],i) =>
              <option key={i} value={key}>{key} ({value}{`$`})</option>)             }
           </select>
           <div className="row">
            Unoccupied : <Seat seatColor="seat-grey" /> Occupied : <Seat seatColor="seat-black" />            
          </div>                        
          <div className="screen"></div>
          <SeatsMatrix/>
          <PriceCalculator/>

      </div>
    );
  }
}
 
export default App;