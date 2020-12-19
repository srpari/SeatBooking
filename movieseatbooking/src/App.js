import './App.css';
import React, { Component } from 'react';
import PriceCalculator from "./components/priceCalculator"
import SeatsMatrix from "./components/seatsMatrix"

class App extends Component {
  constructor() {
    super();
     this.state = {    
      totalSeats : '',
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
    this.seatClickHandler = this.seatClickHandler.bind(this);
  }
  
  handlerDropDown(e) {
    this.setState({ moviePrice: e.target.value });
  }

  
 seatClickHandler  (event, seatNumber) {
  event.stopPropagation()
//  alert ("I am in APP " + seatNumber);
         const seatColor = document.querySelector(`.seat-${seatNumber}`).classList    

        if (this.state.arrseatNumbers.includes(seatNumber)) {
            const newMovieSeats = this.state.arrseatNumbers.filter((seat) => {
                return seat !== seatNumber
            })
            // alert(newMovieSeats)
            seatColor.remove("seat-black")
            seatColor.add("seat-grey") 
            this.setState({
              arrseatNumbers :newMovieSeats
            });
        } else {
            seatColor.remove("seat-grey")
            seatColor.add("seat-black")
            this.state.arrseatNumbers.push(seatNumber);
            this.setState({...this.state.arrseatNumbers,seatNumber})               
        }
//return 0;
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
          <SeatsMatrix seatClickHandler={this.seatClickHandler} />
          {/* <PriceCalculator arrseatNumbers={this.state.arrseatNumbers} price={this.state.moviePrice}/> */}
          <PriceCalculator totalSeats={this.state.arrseatNumbers} moviePrice={this.state.moviePrice}/>
      </div>
    );
  }
}
 
export default App;